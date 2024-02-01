import React, { useEffect } from 'react'
import "./sidebar.scss";
import { useState } from 'react';
import { Radio } from 'antd';
import { AiOutlineUnorderedList } from "react-icons/ai";
import { CiGrid41 } from "react-icons/ci";
import SideDrawer from './SideDrawer';
import { useDispatch, useSelector } from 'react-redux'
import { getToggleValue, openCloseDrawer } from '../../redux/userSlice';

const SideBar = () => {

    const [toggle, setToggle] = useState("grid");
    const [mode, setMode] = useState('top');

    const dispatch = useDispatch();

    const handleModeChange = (e) => {
        setMode(e.target.value);
    };
    const handleToggle = (value) => {
        setToggle(value)
    };

    const handleDrawer = (e) => {
        dispatch(openCloseDrawer())
    };

    useEffect(() => {
        dispatch(getToggleValue(toggle))
    }, [toggle])

    return (
        <div className='main-container'>
            <div className="toggle-container">
                <h1>View Toggle</h1>
                <Radio.Group
                    onChange={handleModeChange}
                    value={mode}
                >
                    <Radio.Button value="top" onClick={() => handleToggle("grid")}><CiGrid41 className='icon' />
                    </Radio.Button>
                    <Radio.Button value="left" onClick={() => handleToggle("row")}><AiOutlineUnorderedList className='icon' />
                    </Radio.Button>
                </Radio.Group>
            </div>
            <div className="feedback-container">
                <h1>Have a FeedBack?</h1>
                <button className='feed-btn' onClick={handleDrawer}>We're Listening!</button>
            </div>
            <div className="drawer">
                <SideDrawer />
            </div>
        </div>
    )
}

export default SideBar
