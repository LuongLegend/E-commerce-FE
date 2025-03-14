import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { loginUser, LoginType, loginGoogle, GgLoginType } from '../../api/userApi'

export const fetchLoginUser = createAsyncThunk('user/fetchLoginUser', async (data: LoginType) => {
  const response = await loginUser(data)
  return response
})
export const fetchLoginGg = createAsyncThunk('user/fetchLoginGg', async (data: GgLoginType) => {
  const response = await loginGoogle(data)
  return response
})

const userSlice = createSlice({
  name: 'user',
  initialState: { loggedIn: false, error: '' },
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
        loggedIn: true,
        error: ''
      }
    },
    removeUser() {
      localStorage.removeItem('token')
      return { loggedIn: false, error: '', success: '' }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLoginUser.fulfilled, (state, action) => {
      const { status, msg } = action.payload
      if (status === 1) {
        state.loggedIn = true
        localStorage.setItem('token', action.payload.token)
      } else {
        state.error = msg
      }
    })
    builder.addCase(fetchLoginGg.fulfilled, (state, action) => {
      const { status, msg } = action.payload
      if (status === 1) {
        state.loggedIn = true
        localStorage.setItem('token', action.payload.token)
      } else {
        state.error = msg || 'Register failed! Please try again'
      }
    })
  }
})

export const { removeUser } = userSlice.actions
export default userSlice.reducer
