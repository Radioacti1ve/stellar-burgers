import {
  ConstructorPage,
  Feed,
  ForgotPassword,
  Login,
  NotFound404,
  Profile,
  ProfileOrders,
  Register,
  ResetPassword
} from '@pages';
import '../../index.css';
import styles from './app.module.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { AppHeader, Modal, OrderInfo, ProtectedRoute } from '@components';
import { useDispatch, useSelector } from '@store';
import {
  feedActions,
  ingredientActions,
  ingredientSelectors,
  userActions
} from '@slices';
import { getFeedsApi, getOrdersApi } from '@api';
import { getFeed } from '@thunks';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getUser())
      .unwrap()
      .catch(() => console.log('error'))
      .finally(() => {
        dispatch(userActions.setCheckUser());
      });
    dispatch(ingredientActions.getIngredients());
    dispatch(feedActions.getFeed());
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        <Route path='/' element={<ConstructorPage />} />
        <Route path='/feed' element={<Feed />} />
        {/* <Route path='/feed/:number' element={<Modal> <OrderInfo> </Modal>} /> */}
        <Route
          path='/login'
          element={
            <ProtectedRoute isPublic>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path='/register'
          element={
            <ProtectedRoute isPublic>
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path='/forgot-password'
          element={
            <ProtectedRoute isPublic>
              <ForgotPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path='/reset-password'
          element={
            <ProtectedRoute isPublic>
              <ResetPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path='/profile/orders'
          element={
            <ProtectedRoute>
              <ProfileOrders />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
    </div>
  );
};

export default App;
