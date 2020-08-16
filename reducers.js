import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reducer from './src/containers/Home/redux/reducers';

const initialState = {
  appLoaded: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START APP':
      return Object.assign({}, initialState, state, action.payload);
    default:
      return state;
  }
};

const appPersistConfig = {
  storage: AsyncStorage,
  key: 'app',
};

const usersPersisConfig = {
  storage: AsyncStorage,
  key: 'users',
};

export const reducers = {
  app: persistReducer(appPersistConfig, appReducer),
  users: persistReducer(usersPersisConfig, reducer),
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
