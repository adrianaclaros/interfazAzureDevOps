import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Estado inicial
const initialState = {
  fields: [],
  loading: false,
  error: null,
};

// Obtener los custom fields desde Azure DevOps
export const fetchCustomFields = createAsyncThunk(
  'customFields/fetchCustomFields',
  async ({ organization, project, token }) => {
    const response = await axios.get(
      `https://dev.azure.com/${organization}/${project}/_apis/wit/fields?api-version=6.0`,
      { headers: { Authorization: `Basic ${btoa(`:${token}`)}` } }
    );
    return response.data.value;
  }
);

const customFieldsSlice = createSlice({
  name: 'customFields',
  initialState,
  reducers: {
    resetError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomFields.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCustomFields.fulfilled, (state, action) => {
        state.loading = false;
        state.fields = action.payload;
      })
      .addCase(fetchCustomFields.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetError } = customFieldsSlice.actions;
export default customFieldsSlice.reducer;
