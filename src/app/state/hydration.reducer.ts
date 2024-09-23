import { ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { AppState } from './app.reducer';

const LOCAL_STORAGE_STATE_KEY = 'state';

export const hydrationMetaReducer = (
  reducer: ActionReducer<AppState>,
): ActionReducer<AppState> => {
  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = localStorage.getItem(LOCAL_STORAGE_STATE_KEY);
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem(LOCAL_STORAGE_STATE_KEY);
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem(LOCAL_STORAGE_STATE_KEY, JSON.stringify(nextState));
    return nextState;
  };
};
