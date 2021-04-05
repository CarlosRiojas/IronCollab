import React, { useState } from 'react';
import { Space, Button, Form, Input, Checkbox } from 'antd';
import { loginFunc } from '../services/auth';
import { useContextInfo } from '../hooks/context';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


const LoginCard = ({ history }) => {
    const [form] = Form.useForm();
    const [error, setError] = useState(null);
    const { login } = useContextInfo();


    async function onFinish(values) {
        try {
            console.log('Success:', values);
            const { data } = await loginFunc(values);
            login(data)
            history.push("/MainHub")
        }
        catch (e) {
            console.log(e);
            setError(e.response.data.message)
        } finally {

        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="email"
                email="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
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

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
            </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginCard;