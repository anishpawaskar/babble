import React from 'react';
import { useSelector } from 'react-redux';

export const Channels = () => {
  const userData = useSelector((state) => state.authSlice);
  console.log(userData);
  return (
    <div>
      <h1>Channels</h1>
    </div>
  );
};
