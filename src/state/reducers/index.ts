import { combineReducers } from 'redux';
import CellsReducer from './cells-reducer';
import bundleReducers from './bundles-reducer';

const reducers = combineReducers({
    cells: CellsReducer,
    bundles: bundleReducers,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
