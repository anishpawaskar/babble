import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate replace to="/login" />;
};
