import store from '@/store';

export type RootAlertState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
