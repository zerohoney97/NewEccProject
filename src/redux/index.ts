import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userReducer";
import studentReducer from "./slice/studentReducer";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const teacherPersistConfig = {
  key: "teacher",
  version: 1,
  storage,
};
const studentPersistConfig = {
  key: "student",
  version: 1,
  storage,
};

const persistTeacherReducer = persistReducer(teacherPersistConfig, userReducer);
const persistStudentReducer = persistReducer(
  studentPersistConfig,
  studentReducer
);

export const store = configureStore({
  reducer: {
    teacherUid: persistTeacherReducer,
    studentInformation: persistStudentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
