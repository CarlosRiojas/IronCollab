import React, { useState } from 'react';
import { Space, Button, Form, Input, Checkbox } from 'antd';
import { signupFunc, loginFunc } from '../services/auth';
import { useContextInfo } from '../hooks/context';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


const SignupCard = ({ history }) => {
    //const [form] = Form.useForm();
    const { signup } = useContextInfo();
    const [error, setError] = useState(null);

    async function onFinish(values) {
        try {
            await signupFunc(values)
            console.log('Success:', values);
            const { data } = await loginFunc(values);
            signup(data);
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

export default SignupCard;