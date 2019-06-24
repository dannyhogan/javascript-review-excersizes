const { getState, updateState } = require('./store');

describe('store tests', () => {

  it('returns state', () => {
    expect(getState()).toEqual({
      shirts: 1,
      pants: 10,
      toys: 50,
      shoes: 2,
      apples: 3
    });
  });

  it('updates state', () => {
    updateState('shirts', 3);
    expect(getState()).toEqual({
      shirts: 3,
      pants: 10,
      toys: 50,
      shoes: 2,
      apples: 3
    });
  });

});
