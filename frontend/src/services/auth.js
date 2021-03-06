import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'here should be your production endpoint')
  : (baseURL = 'http://localhost:3001');

const authService = axios.create({ withCredentials: true, baseURL });

export const signupFunc = (userInf) => authService.post('/signup', userInf);

export const loginFunc = (userInf) => authService.post('/login', userInf);

export const currentUserFunc = () => authService.get('/current-user')

export const logoutFunc = () => authService.get('/logout')

export const deleteFunc = () => authService.get('/deleteProfile')

export const editProfFunc = (userInf) => authService.put('./editProfile', userInf)
