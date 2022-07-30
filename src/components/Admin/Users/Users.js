import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Button, Space, Table, Tooltip } from 'antd';
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import Column from 'antd/lib/table/Column';

import ModifyUserModal from './ModifyUserModal';
import useAuth from '../../../hooks/useAuth';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(false);

  const { token } = useAuth();
  const URL = 'http://localhost:3400/api/user'
  const AuthStr = 'Bearer '.concat(token);

  const getUsers = async () => {
    const { data } = await axios.get(URL, { headers: { Authorization: AuthStr } });
    setUsers(data.users);
  }
  
  useEffect(() => { 
    getUsers() 
  });

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  return (
    <>
      <Table dataSource={users}>
        <Column title="Nombre" dataIndex="fullName" key="fullName" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Estado" dataIndex="active" key="active" />
        <Column title="Rol" dataIndex="role" key="role" />
        <Column
          title="Opciones"
          key="action"
          render={() => (
            <Space size="middle">
              <Tooltip title="modify">
                <Button onClick={ () => {setVisible(true); }} type="primary" shape="circle" icon={<EditFilled />} />
              </Tooltip>
              <Tooltip title="delete">
                <Button type="primary" shape="circle" icon={<DeleteFilled />} danger />
              </Tooltip>
            </Space>
          )}
        />
      </Table>
      <ModifyUserModal
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

export default Users;