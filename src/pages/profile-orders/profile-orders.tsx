import { ordersSelectors } from '@slices';
import { useSelector } from '@store';
import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC } from 'react';

export const ProfileOrders: FC = () => {
  /*DONE* TODO: взять переменную из стора */
  const orders: TOrder[] = useSelector(ordersSelectors.selectOrders);

  return <ProfileOrdersUI orders={orders} />;
};
