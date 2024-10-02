import { createSlice } from "@reduxjs/toolkit";

const refreshSidebarSlice = createSlice({
    name: 'refreshSidebar',
    initialState: {
        refresh: true
    },
    reducers: {
        refreshSidebarFun: (state) => {
            return state = !state
        }
    }
})

export const { refreshSidebarFun } = refreshSidebarSlice.actions;
export default refreshSidebarSlice.reducer