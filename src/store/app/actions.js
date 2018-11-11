const NS = '@hnClone/app';

export const actionTypes = {
  SET_THEME: `${NS}/SET_THEME`,
};

const actions = {
  setTheme: (payload = {}) => ({ type: actionTypes.SET_THEME, payload }),
};

export default actions;
