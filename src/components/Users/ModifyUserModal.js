import { Form, Input, Modal, Radio } from 'antd';
import React from 'react';

const ModifyUserModal = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Modificar usuario"
      okText="Modificar"
      cancelText="Cancelar"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="Nombre completo"
          label="Nombre completo"
          rules={[
            {
              type: 'string',
              required: true,
              message: 'Please input the title of collection!',
              pattern: /^[a-zA-Z ]*$/,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="modifier" className="collection-create-form_last-form-item">
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModifyUserModal;