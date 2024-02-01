import React from 'react';
import { Form, Input } from 'antd';

const CommonInput = ({ props, index }) => {
    return (
        <>
            <Form.Item
                name={props.name}
                label={props.label}
                rules={props.rules}
            >
                <Input
                    className='common-input'
                    placeholder={props.placeholder}
                    type={props.type}
                />
            </Form.Item>
        </>
    );
};

export default CommonInput;
