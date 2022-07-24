import { Layout } from 'antd';
import React from 'react';
import './index.css';

const { Footer } = Layout;

const PageFooter = () => {
  return (
    <Footer className='footer text-center text-white py-2'>
    Ant Design ©2018 Created by Ant UED
  </Footer>
  );
};

export default PageFooter;