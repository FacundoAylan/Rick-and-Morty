import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import characterReducer from './action';

const persistConfig = {
  key: 'root',          
  storage,             
  whitelist: ['characters'],
};

// Crear reducer persistido
const persistedReducer = persistReducer(persistConfig, characterReducer);

export const store = configureStore({
  reducer: {
    characters: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // evitar warnings
      },
    }),
});

// Persistor para envolver el Provider
export const persistor = persistStore(store);

// Tipos para TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
