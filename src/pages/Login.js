import { Form, Input, Button, Checkbox, Card } from "antd";
import { useDispatch } from "react-redux";
import { login } from "../utils/api";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = () => {
  const dispatch = useDispatch();

  const performLogin = (userInfo) => {
    dispatch({
      type: "LOGIN",
      ...userInfo,
    });
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  };

  const onFinish = async (values) => {
    const loginResponse = await login(values.username, values.password);
    if (loginResponse?.data) {
      const loginPayload = {
        name: loginResponse?.data?.userName,
        isAdmin: loginResponse?.data?.isAdmin,
      };
      performLogin(loginPayload);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-page-wrap">
      <Card style={{ width: 400 }}>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
