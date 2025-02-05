import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/api";

export const fetchShipments = createAsyncThunk("shipments/fetch", async () => {
  const response = await axios.get("/shipments");
  return response.data;
});

const shipmentSlice = createSlice({
  name: "shipments",
  initialState: { shipments: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShipments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchShipments.fulfilled, (state, action) => {
        state.loading = false;
        state.shipments = action.payload;
      })
      .addCase(fetchShipments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default shipmentSlice.reducer;
