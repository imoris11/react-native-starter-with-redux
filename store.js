import rootReducer from './reducers';
import sagas from './sagas/';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

/*ß
 *--------------------------------------------------*
 * Persist config documentation
 * https://github.com/rt2zz/redux-persist/blob/master/src/types.js#L13-L27
 *--------------------------------------------------*
 */

const appMiddleware = (_store) => (next) => (action) => {
  //   var state = store.getState()
  //   switch (action.type) {
  //     case actions.ADD_TASK:
  //       *do something*
  //       break;
  //   }
  next(action);
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, appMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

export const store = createStore(rootReducer, compose(...enhancers));

sagaMiddleware.run(sagas);

export const persistor = persistStore(store);
