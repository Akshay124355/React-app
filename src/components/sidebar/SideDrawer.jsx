import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';

const SideDrawer = () => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');

    const showDrawer = () => {
      setOpen(false);
    };
    const onClose = () => {
      setOpen(false);
    };
    const onChange = (e) => {
      setPlacement(e.target.value);
    };
    return (
        <>
          <Space>
            <Radio.Group value={placement} onChange={onChange}>
            </Radio.Group>
            <Button type="primary" onClick={showDrawer}>
              Open
            </Button>
          </Space>
          <Drawer
            title="Basic Drawer"
            placement={placement}
            closable={false}
            onClose={onClose}
            open={open}
            key={placement}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </>
      );
}

export default SideDrawer
