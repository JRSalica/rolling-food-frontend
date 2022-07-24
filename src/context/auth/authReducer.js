const authReducer = (state, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
    case 'LOGIN_USER':
      localStorage.setItem('token', action.payload.token);
      return{
        ...state,
        isAuthenticated: true,
      };
  
    default:
      return state;
  }
};

export default authReducer;