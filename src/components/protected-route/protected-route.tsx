import { Preloader } from '@ui';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from '@store';
import { userSelectors } from '@slices';

type ProtectedRouteProps = {
  children: React.ReactElement;
  isPublic?: boolean;
};

export const ProtectedRoute = ({ children, isPublic }: ProtectedRouteProps) => {
  const user = useSelector(userSelectors.selectUser);
  const checkUser = useSelector(userSelectors.selectUserCheck);

  if (!checkUser) {
    return <Preloader />;
  }

  if (isPublic && user) {
    return <Navigate to='/profile' />;
  }

  if (!isPublic && !user) {
    return <Navigate to='/login' />;
  }

  return children;
};
