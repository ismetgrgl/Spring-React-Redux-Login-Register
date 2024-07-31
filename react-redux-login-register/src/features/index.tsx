import { configureStore } from "@reduxjs/toolkit";
import { useSelector} from 'react-redux';
import { loginSlice, registerSlice } from "./store";
const store = configureStore({
  reducer:{
    register: registerSlice,
    login: loginSlice
  }
});
export type SocialDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();
export default store;