import React, { useState } from 'react';
import { Drawer, Radio, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { openCloseDrawer } from '../../redux/userSlice';
import FeedBackForm from '../FeedBackForm';

const SideDrawer = () => {

  const isOpen = useSelector((store) => store.users.isOpen);
  const [placement, setPlacement] = useState('left');

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(openCloseDrawer())
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  return (
    <>
      <Space>
        <Radio.Group value={placement} onChange={onChange}>
        </Radio.Group>
      </Space>
      <Drawer
        title="FeedBack Form"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={isOpen}
        key={placement}
        width={900}

      >
        <FeedBackForm />
      </Drawer>
    </>
  );
}

export default SideDrawer
