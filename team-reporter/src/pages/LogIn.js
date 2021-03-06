import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function LogIn() {
    return (
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>


      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
        <Link to="Home">Log in</Link>
        </Button>
          Not have Account? <Link to="SignUp">register now!</Link>
      </Form.Item>
    </Form>  
    )
  };
  
  export default LogIn;
  









//ReactDOM.render(<NormalLoginForm />, mountNode);