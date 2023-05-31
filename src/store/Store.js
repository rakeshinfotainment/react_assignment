import {configureStore} from '@reduxjs/toolkit';
import Reducer from '../reducer/Reducer';
const Store=configureStore({reducer:Reducer});
export default Store;