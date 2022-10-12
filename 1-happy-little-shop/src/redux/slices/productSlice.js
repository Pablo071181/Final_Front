import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../config/axiosInstance';

export const fetchReadProduct = createAsyncThunk(
  'product/fetchReadProduct',
  async (slug, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: `/productos?filters[slug][$eq]=${slug}&populate=*`
      };
      const { data } = await axiosInstance(options);
      return data.data[0];
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

const initialState = {
  loading: false,
  error: {},
  product: {}
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReadProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadProduct.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = {};
      state.product = payload;
    });
    builder.addCase(fetchReadProduct.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.data = {};
    });
  }
});

// export const { } = productSlice.actions;

export default productSlice.reducer;