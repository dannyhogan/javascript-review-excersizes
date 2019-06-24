const state = {
  shirts: 1,
  pants: 10,
  toys: 50,
  shoes: 2,
  apples: 3
};

const getState = () => {
  return state;
};

const updateState = (key, value) => {
  state[key] = value;
};

module.exports = { getState, updateState };
