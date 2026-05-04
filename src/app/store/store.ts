import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from '@/features/session/api'
import { router } from '@/app/providers/router';
import { authSlice } from '@/features/auth/model/authSlice';
import { userSlice } from '@/entities/user';

const extraArgument = {
  router: router,
  navigate: (path: string) => {
    router.navigate(path);
  }
};

const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  [authSlice.name]: authSlice.reducer,
  [userSlice.name]: userSlice.reducer,
}

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument
      }
    }).concat(baseApi.middleware),
})


