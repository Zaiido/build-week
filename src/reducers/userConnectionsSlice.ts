import { createSlice } from "@reduxjs/toolkit";
import { fetchUserConnectionsAction } from "../actions";

const userConnectionsSlice = createSlice({
    name: "userConnections",
    initialState: {
        results: [],
        status: "idle",
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserConnectionsAction.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUserConnectionsAction.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.results = action.payload;
            })
            .addCase(fetchUserConnectionsAction.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message ? action.error.message : null;
            });
    },
});

export default userConnectionsSlice.reducer;
