import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Button, Space, Table, Tooltip } from 'antd';
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import Column from 'antd/lib/table/Column';
import ModifyUserModal from './ModifyUserModal';



const URL = 'http://localhost:3400/api/user'
const USER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6IkdvbnphbG8gR29uemFsZXoiLCJlbWFpbCI6ImV4YW1wbGVAZW1haWwuY29tIiwiYWN0aXZlIjp0cnVlLCJyb2xlIjoiQURNSU5fUk9MRSIsImlhdCI6MTY1ODQyNDUyNywiZXhwIjoxNjU4NDI4MTI3fQ.0t1eu01mZWwtU1mpbjPsheegt6hh8-ocd5LgB3W0m3c';
const AuthStr = 'Bearer '.concat(USER_TOKEN);

const Users = () => {
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(false);

  const getUsers = async () => {
    const { data } = await axios.get(URL, { headers: { Authorization: AuthStr } });
    setUsers(data.users);
  }
  
  useEffect(() => { getUsers(); }, []);

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