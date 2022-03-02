import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import shipReducer from './ship'

export const store = configureStore({
  reducer: {
    user: userReducer,
    ship: shipReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch