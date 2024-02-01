import React from 'react';
import { Form, Input } from 'antd';
import "./commoninput.scss"

const CommonInput = ({ props, index }) => {
    return (
        <>
            <Form.Item
                name={props.name}
                label={props.label}
                rules={props.rules}
            >
                {
                    props.name == "address" ?
                        <textarea
                            className='common-input'
                            name={props.name}
                            type={props.type}
                            placeholder={props.placeholder}
                            label={props.label}
                            rules={props.rules}
                            id="" cols="51" rows="10"></textarea>
                        :
                        <Input
                            className='common-input'
                            placeholder={props.placeholder}
                            type={props.type}
                        />
                }
            </Form.Item>
        </>
    );
};

export default CommonInput;
