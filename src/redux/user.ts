import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'User',
    initialState: {},
    reducers: {
        getUser: (_, action) => {
            return action.payload;
        },
        clearUser: () => {
            return {}
        }
    },
})

export const { getUser,clearUser } = userSlice.actions

export default userSlice.reducer