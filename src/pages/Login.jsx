import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';



const Login = () => {
  const maggi= (value)=>{
    console.log("dsfh",value)
  }
  return (
    <div>
          <Form
  onFinish={ maggi}
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>


    </div>
  )
}

export default Login
