import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { loginUser, LoginType } from '../../api/userApi'

export const fetchLoginUser = createAsyncThunk('user/fetchLoginUser', async (data: LoginType) => {
  const response = await loginUser(data)
  return response
})

const userSlice = createSlice({
  name: 'user',
  initialState: { loggedIn: false },
  reducers: {
    addUser(state, action) {
      const { id, username, email, type, cart, wishlist } = action.payload
      return {
        id,
        username,
        email,
        cart,
        type,
        wishlist,
        loggedIn: true
      }
    },
    removeUser() {
      return { loggedIn: false }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLoginUser.fulfilled, (state, action) => {
      state.loggedIn = true
      localStorage.setItem('token', action.payload.token)
    })
  }
})

export default userSlice.reducer
