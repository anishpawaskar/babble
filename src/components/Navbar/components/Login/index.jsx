import React, { useState } from 'react';
import { LoginPresentation } from './Presentation';

export const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.password);
  };

  const handleLogin = () => {
    console.log('login handle kar', email, password);
  };
  return (
    <LoginPresentation
      handleEmail={handleEmail}
      handlePassword={handlePassword}
      handleLogin={handleLogin}
    />
  );
};
