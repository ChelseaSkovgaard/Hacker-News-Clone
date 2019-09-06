import { combineReducers } from 'redux'; //combines all reducer functions in single state tree
import app from './app/reducer';

const rootReducer = combineReducers({
	app,
});

export default rootReducer;
