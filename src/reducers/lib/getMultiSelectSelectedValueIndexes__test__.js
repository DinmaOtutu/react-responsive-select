import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import getMultiSelectSelectedValueIndexes from './getMultiSelectSelectedValueIndexes';
import state from '../../../mocha/state-mock';

describe('getMultiSelectSelectedValueIndexes', () => {
  deepFreeze(state);

  it('should return an array of found option indexes if match', () => {
    const selectedValues = ['fiat', 'bmw'];
    const result = getMultiSelectSelectedValueIndexes(state.options, selectedValues);
    expect(result).to.eql([1, 3]);
  });

  it('should return [0] if no matches found', () => {
    const selectedValues = ['jibber', 'jabber'];
    const result = getMultiSelectSelectedValueIndexes(state.options, selectedValues);
    expect(result).to.eql([0]);
  });

  it('should return [0] if selectedValues is undefined', () => {
    const selectedValues = undefined;
    const result = getMultiSelectSelectedValueIndexes(state.options, selectedValues);
    expect(result).to.eql([0]);
  });
});
