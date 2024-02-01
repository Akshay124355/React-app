import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [],
    currentUsers: [],
    endPointRecord: 0,
    toggleValue: "",
    isOpen: false,
}
const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUsers: (state, action) => {
            state.users = action.payload;
        },
        deteleUser: (state, action) => {
            const { data, id } = action.payload;
            const newData = data.filter((item) => item.id !== id);
            state.users = newData;
        },
        getToggleValue: (state, action) => {
            state.toggleValue = action.payload
        },
        openCloseDrawer: (state) => {
            state.isOpen = !state.isOpen;
        }

    }
})

export const { addUsers, deteleUser, getToggleValue, openCloseDrawer } = userSlice.actions;
export default userSlice.reducer;