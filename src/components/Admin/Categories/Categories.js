import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

import { Button, Space, Table, Tooltip } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
import Column from 'antd/lib/table/Column';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const { token } = useAuth();
  const URL = 'http://localhost:3400/api/category'
  const AuthStr = 'Bearer '.concat(token);

  const getCategories = async () => {
    const { data } = await axios.get(URL, { headers: { Authorization: AuthStr } });
    setCategories(data.categories);
  }
  
  useEffect(() => { getCategories(); });
  return (
    <>
    <Table dataSource={categories}>
      <Column title="Nombre" dataIndex="name" key="fullName" />
      <Column title="Estado" dataIndex="active" key="active" />
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

export default Categories;