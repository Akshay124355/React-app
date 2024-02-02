import React, { useState,useRef  } from 'react'
import { Form, Button } from 'antd';
import CommonInput from '../constant/CommonInput';
import { feedbackFields } from '../constant/constants';
import "./feedback.scss"

const FeedBackForm = () => {

    const [isBtnLoading, setIsBtnLoading] = useState(false);
    const formRef = useRef();
    const [form] = Form.useForm();

    // form submit function
    const onFinish = async (values) => {
        console.log(values);
        setIsBtnLoading(false);
        form.resetFields();
    };

    return (
        <div className="form-container" style={{ marginTop: "5rem" }}>
            <div className="form-container__box">
                <Form name="form-form"
                    onFinish={onFinish}
                    ref={formRef}
                    className='form-container__box__form-wrapper'
                    layout="vertical"
                >
                    {feedbackFields.map((data, index) => {
                        return (
                            <CommonInput props={data} index={index} key={index}/>
                        )
                    })}

                    <div>
                        <Button type="submit" className='submit-button' loading={isBtnLoading}>
                            Submit FeedBack
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default FeedBackForm;

