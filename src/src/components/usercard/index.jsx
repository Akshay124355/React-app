import React, { useEffect, useState } from 'react'
import { Pagination } from 'antd';
import { useSelector } from 'react-redux'
import UserDataCard from './UserDataCard';
import './userdatacard.scss'
import SideBar from '../sidebar/SideBar';

const UserCard = () => {

    const usersAllData = useSelector((store) => store.users.users);
    const [data, setdata] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        setdata(usersAllData.slice(0, 6))
    }, [usersAllData])

    const getPegination = (page) => {
        setCurrentPage(page);
        setdata(usersAllData.slice(page * 6 - 6, 6 * page))
    }

    useEffect(() => {
        if (currentPage) {
            setdata(usersAllData.slice(currentPage * 6 - 6, 6 * currentPage))
        }
    }, [usersAllData])

    return (
        <div className='main-container__wrapper'>

            <SideBar />
            <div className="card__contaniner">

                <UserDataCard data={data} />

                <div className='pegination-container'>
                    <Pagination defaultCurrent={1} onChange={getPegination} total={usersAllData.length} />
                </div>
            </div>
        </div>
    )
}

export default UserCard