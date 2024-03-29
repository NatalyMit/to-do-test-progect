import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { rootReducer } from './reducer';

// const initialState = {
// contacts: {
//   items: [],
// },
// filters: {
//   name: "",
// },};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
