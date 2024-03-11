import React, { useState } from 'react';
import { LoginPresentation } from './Presentation';
import { useSignUpMutation } from 'services/authenticationApi';
import { useDispatch } from 'react-redux';
import { setIsLoggedIn, setSelfData } from 'store/authSlice';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [userIdentifier, setuserIdentifier] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoginFailed, setIsLoginFailed] = useState(false);

  const [signUp, { isLoading }] = useSignUpMutation();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleUserIdentifier = (e) => {
    setuserIdentifier(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (userIdentifier && password) {
        if (userIdentifier.includes('@')) {
          const { userData } = await signUp({
            email: userIdentifier,
            password,
          }).unwrap();
          if (userData && !isLoading) {
            dispatch(setIsLoggedIn({ isLoggedIn: true }));
            dispatch(setSelfData({ selfData: userData }));
            navigate('/channels');
          }
        } else {
          const { userData } = await signUp({
            username: userIdentifier,
            password,
          }).unwrap();
          if (userData && !isLoading) {
            dispatch(setIsLoggedIn({ isLoggedIn: true }));
            dispatch(setSelfData({ selfData: userData }));
            navigate('/channels');
          }
        }
      }
    } catch (err) {
      setIsLoginFailed(true);
    }
  };
  return (
    <LoginPresentation
      handleUserIdentifier={handleUserIdentifier}
      handlePassword={handlePassword}
      handleLogin={handleLogin}
      isLoginFailed={isLoginFailed}
    />
  );
};
