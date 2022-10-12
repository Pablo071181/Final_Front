import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../config/axiosInstance';

export const fetchReadHero = createAsyncThunk(
  'home/fetchReadHero',
  async (arg, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: `/productos?pagination[page]=${arg.page}&pagination[pageSize]=${arg.pageSize}&populate=subcategoria,marca,imagen&sort=id%3Adesc`
      };
      const { data } = await axiosInstance(options);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const fetchReadMostSelled = createAsyncThunk(
  'home/fetchReadMostSelled',
  async (arg, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: `/productos?pagination[page]=${arg.page}&pagination[pageSize]=${arg.pageSize}&populate=marca,imagen&sort=id%3Adesc`
      };
      const { data } = await axiosInstance(options);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const fetchReadBrands = createAsyncThunk(
  'home/fetchReadBrands',
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: `/marcas?sort=id%3Adesc`
      };
      const { data } = await axiosInstance(options);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

const initialState = {
  loading: false,
  error: {},
  heroProducts: [],
  mostSelledProducts: [],
  brands: []
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReadHero.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadHero.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = {};
      state.heroProducts = payload;
    });
    builder.addCase(fetchReadHero.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.heroProducts = [];
    });
    builder.addCase(fetchReadMostSelled.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadMostSelled.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = {};
      state.mostSelledProducts = payload;
    });
    builder.addCase(fetchReadMostSelled.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.mostSelledProducts = [];
    });
    builder.addCase(fetchReadBrands.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadBrands.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = {};
      state.brands = payload;
    });
    builder.addCase(fetchReadBrands.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.brands = [];
    });
  }
});

// export const { } = homeSlice.actions;

export default homeSlice.reducer;