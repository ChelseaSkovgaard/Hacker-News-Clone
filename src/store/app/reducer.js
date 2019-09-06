import { actionTypes } from './actions';

// When we dispatch a SET_THEME action, it will update the theme value of the state to the value inside the payload. The payload will be an object that has the form { theme: 'value' }. When we spread … the payload object, the keys of the state will be replace the keys in ...state that match — in this case theme.

const getInitialState = () => ({
	theme: 'dark',
})

const app = (state = getInitialState(), { type, payload }) => {
	switch(type) {
		case actionTypes.SET_THEME:
			return {
				...state,
				...payload,
			};
			default:
				return state;
	}
}

export default app;