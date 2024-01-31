import React from 'react'
import "./sidebar.scss";
import { useState } from 'react';
import { Radio, Tabs } from 'antd';
import { AiOutlineUnorderedList } from "react-icons/ai";
import { CiGrid41 } from "react-icons/ci";

const SideBar = () => {

    const [mode, setMode] = useState('top');
    const handleModeChange = (e) => {
        setMode(e.target.value);
    };

    return (
        <div className='main-container'>
            <div className="toggle-container">
                <h1>View Toggle</h1>
                <Radio.Group
                    onChange={handleModeChange}
                    value={mode}
                    style={{
                        marginBottom: 8,
                    }}
                >
                    <Radio.Button value="top" ><CiGrid41 className='icon'/>
                    </Radio.Button>
                    <Radio.Button value="left"><AiOutlineUnorderedList className='icon'/>
                    </Radio.Button>
                </Radio.Group>
            </div>
            <div className="feedback-container">
                <h1>View Toggle</h1>
            </div>
        </div>
    )
}

export default SideBar


// const App = () => {

//     return (
//         <div>

//             <Tabs
//                 defaultActiveKey="1"
//                 tabPosition={mode}
//                 style={{
//                     height: 220,
//                 }}
//                 items={new Array(30).fill(null).map((_, i) => {
//                     const id = String(i);
//                     return {
//                         label: `Tab-${id}`,
//                         key: id,
//                         disabled: i === 28,
//                         children: `Content of tab ${id}`,
//                     };
//                 })}
//             />
//         </div>
//     );
// };
// export default App;