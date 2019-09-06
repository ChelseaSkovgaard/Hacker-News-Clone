//manage feature to switch day and night mode

const NS = '@hnReader/app';

//actionTypes object holds action-type constants, to be used in reducer to match type with state change

export const actionTypes = {
	SET_THEME: `${NS}/SET_THEME`,

};

//actions holds functions we will dispatch when state changes

const actions = {
	setTheme: (payload = {}) => ({ type: actionTypes.SET_THEME, payload}),
};

export default actions;