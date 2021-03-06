import * as actionTypes from '../constants/actionTypes';
import { nextValidIndex } from '../lib/nextValidIndex';

import {
  getSelectedValueIndex,
  getMultiSelectSelectedValueIndexes,
  getMultiSelectInitialSelectedOptions,
  addMultiSelectIndex,
  removeMultiSelectIndex,
  addMultiSelectOption,
  removeMultiSelectOption,
  mergeIsAlteredState,
  getInitialMultiSelectOption,
  getSingleSelectSelectedOption,
  resetMultiSelectState,
} from './lib';

export default function reducer(state, action) {
  switch (action.type) {
    case actionTypes.UPDATE_VIA_PROPS:
    case actionTypes.INITIALISE: {
      const initialSelectedIndex = getSelectedValueIndex(action.value);
      const initialSelectedIndexes = getMultiSelectSelectedValueIndexes(
        action.value,
        action.value.selectedValues,
        action.value.noSelectionLabel,
      );

      return {
        ...state,

        hasOptHeaders: action.value.options.some(
          option => option.optHeader === true,
        ),

        // Constants
        multiselect: action.value.multiselect || false,

        // Optional nothing selected label
        noSelectionLabel: action.value.noSelectionLabel,

        // Universal
        name: action.value.name,
        options: action.value.options,
        altered: action.value.altered || false,
        disabled: action.value.disabled || false,

        // Single select
        singleSelectInitialIndex: initialSelectedIndex,
        singleSelectSelectedIndex: initialSelectedIndex,
        singleSelectSelectedOption: getSingleSelectSelectedOption(
          action.value,
          initialSelectedIndex,
        ),

        // For determining highlighted item on Keyboard navigation and selection via UPDATE_VIA_PROPS
        // If UPDATE_VIA_PROPS and state exists, re-select nextPotentialSelectionIndex from state
        nextPotentialSelectionIndex: state.nextPotentialSelectionIndex
          ? state.nextPotentialSelectionIndex
          : initialSelectedIndex,

        // Multi select
        multiSelectInitialSelectedIndexes: initialSelectedIndexes,
        multiSelectSelectedIndexes: initialSelectedIndexes,
        multiSelectSelectedOptions: {
          options: getMultiSelectInitialSelectedOptions(
            action.value,
            initialSelectedIndexes,
          ),
        },
      };
    }

    case actionTypes.SET_IS_DRAGGING:
      return {
        ...state,
        isDragging: action.value,
      };

    case actionTypes.SET_OPTIONS_PANEL_OPEN: {
      const newState = {
        ...state,
        isOptionsPanelOpen: true,

        // For determining highlighted item on Keyboard navigation
        nextPotentialSelectionIndex: (() => {
          if (state.multiselect) {
            return state.multiSelectSelectedIndexes.length
              ? nextValidIndex(state, state.multiSelectSelectedIndexes[0])
              : nextValidIndex(state, 0);
          }
          return nextValidIndex(state, state.nextPotentialSelectionIndex);
        })(),

        singleSelectSelectedOption: getSingleSelectSelectedOption(
          state,
          state.nextPotentialSelectionIndex,
        ),
      };

      return mergeIsAlteredState(newState);
    }

    case actionTypes.SET_OPTIONS_PANEL_CLOSED: {
      const newState = {
        ...state,
        isOptionsPanelOpen: false,
        singleSelectSelectedIndex: state.nextPotentialSelectionIndex,
        singleSelectSelectedOption: getSingleSelectSelectedOption(
          state,
          state.nextPotentialSelectionIndex,
        ),
      };
      return mergeIsAlteredState(newState);
    }

    case actionTypes.SET_OPTIONS_PANEL_CLOSED_NO_SELECTION:
    case actionTypes.SET_OPTIONS_PANEL_CLOSED_ONBLUR:
      return {
        ...state,
        isOptionsPanelOpen: false,
      };

    case actionTypes.SET_NEXT_SELECTED_INDEX:
      return {
        ...state,
        nextPotentialSelectionIndex: action.optionIndex,
        singleSelectSelectedOption: getSingleSelectSelectedOption(
          state,
          action.optionIndex,
        ),
      };

    case actionTypes.SET_NEXT_SELECTED_INDEX_ALPHA_NUMERIC:
      return {
        ...state,
        isOptionsPanelOpen: true,
        nextPotentialSelectionIndex: action.optionIndex,
      };

    case actionTypes.SET_SINGLESELECT_OPTIONS: {
      const nextState = {
        ...state,
        nextPotentialSelectionIndex: action.optionIndex,
        singleSelectSelectedIndex: action.optionIndex,
        isOptionsPanelOpen: false,
        singleSelectSelectedOption: getSingleSelectSelectedOption(
          state,
          action.optionIndex,
        ),
      };

      // Set altered state
      return mergeIsAlteredState(nextState);
    }

    case actionTypes.SET_MULTISELECT_OPTIONS: {
      if (!state.noSelectionLabel) {
        const isFirstOptionInListSelected =
          state.multiSelectSelectedIndexes[0] === 0 &&
          state.multiSelectSelectedIndexes.length === 1;

        // If anything selected and first option was requested, deselect all, then select first option
        const shouldDeselectAllAndSelectFirstOption =
          state.multiSelectSelectedIndexes.length > 0 &&
          !isFirstOptionInListSelected &&
          action.optionIndex === 0;

        // Deselect first option when any other value is requested
        const shouldDeselectFirstOptionAndSelectRequestedOption =
          isFirstOptionInListSelected && action.optionIndex !== 0;

        // If any thing selected and first option was requested, deselect all, and return first option
        if (shouldDeselectAllAndSelectFirstOption) {
          const nextState = getInitialMultiSelectOption(state);
          return mergeIsAlteredState(nextState);
        }

        // Deselect first option when first option selected and another option is requested
        if (shouldDeselectFirstOptionAndSelectRequestedOption) {
          // eslint-disable-next-line no-param-reassign
          state = resetMultiSelectState(state);
        }
      }

      // Remove noSelectionLabel from selected options if something is selected
      if (
        state.noSelectionLabel &&
        state.multiSelectSelectedOptions.options[0].text ===
          state.noSelectionLabel
      ) {
        // eslint-disable-next-line no-param-reassign
        state.multiSelectSelectedOptions.options = [];
      }

      // With optHeader, action.optionIndex can go out of bounds - check and adjust the value of optionIndex when requried
      const actionOptionIndexAdjusted = nextValidIndex(
        state,
        action.optionIndex,
      );

      // Find index of requested option
      const indexLocation = state.multiSelectSelectedIndexes.indexOf(
        actionOptionIndexAdjusted,
      );

      // If requested item does not exist, add it. Else remove it
      let nextState = {
        ...state,
        nextPotentialSelectionIndex: actionOptionIndexAdjusted,
        multiSelectSelectedIndexes:
          indexLocation === -1
            ? addMultiSelectIndex(state, actionOptionIndexAdjusted)
            : removeMultiSelectIndex(state, indexLocation),
        multiSelectSelectedOptions:
          indexLocation === -1
            ? addMultiSelectOption(state, actionOptionIndexAdjusted)
            : removeMultiSelectOption(state, indexLocation),
      };

      if (nextState.multiSelectSelectedOptions.options.length === 0) {
        // Reset to noSelectionLabel if user has deselected all items and has set a `noSelectionLabel` prop
        if (state.noSelectionLabel) {
          const initialSelectedIndexes = getMultiSelectSelectedValueIndexes(
            state,
            state.selectedValues,
          );
          nextState = {
            ...nextState,
            nextPotentialSelectionIndex: state.hasOptHeaders
              ? nextValidIndex(state, -1)
              : -1,
            multiSelectSelectedOptions: {
              options: getMultiSelectInitialSelectedOptions(
                state,
                initialSelectedIndexes,
              ),
            },
          };
        } else {
          // Select first option if user has deselected all items
          nextState = getInitialMultiSelectOption(state);
        }
      }
      // Set altered state
      return mergeIsAlteredState(nextState);
    }
    default:
      return state;
  }
}
