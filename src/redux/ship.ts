import { createSlice } from '@reduxjs/toolkit';

interface IState {
    id: number
    name: string
}

const initialState: IState = {
    id: 0,
    name: ""
}

export const shipSlice = createSlice({
    name: 'Ship',
    initialState,
    reducers: {
        addShip: (state, action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
        },
        clearShip: (state) => {
            state.id = 0
            state.name = ""
        }
    },
})

export const { addShip ,clearShip} = shipSlice.actions

export default shipSlice.reducer