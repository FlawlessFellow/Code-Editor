import { combineReducers } from 'redux';
import CellsReducer from './cells-reducer';
import BundleReducers from './bundles-reducer';

const reducers = combineReducers({
    cells: CellsReducer,
    bundles: BundleReducers,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
