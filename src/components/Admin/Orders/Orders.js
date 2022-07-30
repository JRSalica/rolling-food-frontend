import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

import { Button, Space, Table, Tooltip } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
import Column from 'antd/lib/table/Column';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const { token } = useAuth();
  const URL = 'http://localhost:3400/api/orders'
  const AuthStr = 'Bearer '.concat(token);

  const getOrders = async () => {
    const { data } = await axios.get(URL, { headers: { Authorization: AuthStr } });
    setOrders(data.orders);
  }
  
  useEffect(() => { getOrders(); });

  return (
    <>
      <Table dataSource={orders}>
        <Column title="Nombre" dataIndex="fullName" key="fullName" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Estado" dataIndex="active" key="active" />
        <Column title="Rol" dataIndex="role" key="role" />
        <Column
          title="Opciones"
          key="action"
          render={() => (
            <Space size="middle">
              <Tooltip title="delete">
                <Button type="primary" shape="circle" icon={<DeleteFilled />} danger />
              </Tooltip>
            </Space>
          )}
        />
      </Table>
    </>
  );
};

export default Orders;