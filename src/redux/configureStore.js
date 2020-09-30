import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import reducer from './rootReducer';

export default (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
  ];

  const store = configureStore({
    reducer,
    middleware,
    preloadedState,
  });

  sagaMiddleware.run(rootSaga);

  return store;
};
