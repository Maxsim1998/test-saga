import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { bindPromiseCreators } from 'redux-saga-routines';
import { useMemo } from 'react';

export function useActionsRoutines(actions, deps) {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map(a => bindPromiseCreators(a, dispatch));
      }
      return bindPromiseCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : [dispatch]
  );
}

export function useActions(actions, deps) {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map(a => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : [dispatch]
  );
}
