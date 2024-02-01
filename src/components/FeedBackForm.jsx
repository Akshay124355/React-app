import React, { useState } from 'react'
import { Form, Button } from 'antd';
 import CommonInput from '../constant/CommonInput';
 import { feedbackFields } from '../constant/constants';
import "./feedback.scss"

const FeedBackForm = () => {

    const [isBtnLoading, setIsBtnLoading] = useState(false);

    // form submit function
    const onFinish = async (values) => {
        console.log(values);
        setIsBtnLoading(false);

    };

    return (
        <div className="form-container" style={{ marginTop: "5rem" }}>
            <div className="form-container__box">
                <Form name="form-form"
                    onFinish={onFinish}
                    className='form-container__box__form-wrapper'
                    layout="vertical"
                >
                    {feedbackFields.map((data, index) => {
                        return (
                            <CommonInput props={data} index={index} />
                        )
                    })}

                    <div className="form-container__box__form-wrapper-btn">
                        <Button htmlType="submit" className='button' loading={isBtnLoading}>
                        Submit FeedBack
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default FeedBackForm;

