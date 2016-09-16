import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button,Icon } from 'antd';
const FormItem = Form.Item;

let MenuDetailForm = ()=>{

	const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
	return(
		<Form horizontal >
			<FormItem
          {...formItemLayout}
          label="密码"
        >
          <Input type="password" placeholder="请输入密码" />
        </FormItem>


		</Form>
	)
}

const MenuDetail = Form.create()(MenuDetailForm);

export default MenuDetail;