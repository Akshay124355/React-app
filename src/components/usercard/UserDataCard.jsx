import React from 'react'
import { deteleUser } from '../../redux/userSlice';
import { useSelector, useDispatch } from 'react-redux'
import { RxCross2 } from "react-icons/rx";
import './userdatacard.scss'

const UserDataCard = ({ data, toggle }) => {

    const usersAllData = useSelector((store) => store.users.users);
    const dispatch = useDispatch();

    const deleteHandle = (id) => {
        dispatch(deteleUser({ data: usersAllData, id: id }));
    }
    if (!usersAllData || usersAllData.length === 0) {
        return <div className='loading'>Loading...</div>;
    }
    return (
        <div className='user-card-container'>
            {data?.map((data) => {
                return (
                    <>
                        <div className={`container ${toggle === 'grid' ? 'grid' : ''}`}>
                            <div className="card">
                                <div className="card-title">
                                    <p className='title'>{data?.title}</p>
                                </div>
                                <div className="card-body">
                                    <p>{data?.body}</p>
                                </div>
                            </div>
                            <div className="cross-icon">
                                <RxCross2
                                    className='icon'
                                    onClick={() => deleteHandle(data.id)}
                                />
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default UserDataCard;