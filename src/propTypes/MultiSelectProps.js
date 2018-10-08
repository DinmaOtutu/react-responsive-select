import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const MultiSelectProps = {
  altered: PropTypes.bool,
  caretIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  customLabelText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.element,
  ]),
  disabled: PropTypes.bool,
  multiSelectInitialSelectedIndexes: PropTypes.arrayOf(PropTypes.number),
  multiSelectSelectedIndexes: PropTypes.arrayOf(PropTypes.number),
  multiSelectSelectedOptions: PropTypes.shape({
    altered: PropTypes.bool,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        text: PropTypes.string,
        value: PropTypes.string,
        markup: PropTypes.object,
      }),
    ),
  }),
  isDragging: PropTypes.bool,
  isOptionsPanelOpen: PropTypes.bool,
  name: PropTypes.string,
  nextPotentialSelectionIndex: PropTypes.number,
  onSubmit: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.string,
      optHeader: PropTypes.bool,
    }),
  ).isRequired,
  prefix: PropTypes.string,
};
