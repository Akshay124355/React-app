import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [],
    currentUsers: [],
    endPointRecord:0,
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
        }
    }
})

export const { addUsers, deteleUser } = userSlice.actions;
export default userSlice.reducer;