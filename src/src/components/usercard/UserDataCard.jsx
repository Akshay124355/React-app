import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { deteleUser } from '../../redux/userSlice';
import { useSelector, useDispatch } from 'react-redux'
import './userdatacard.scss'
import { RxCross2 } from "react-icons/rx";


const UserDataCard = ({data}) => {
    
    const usersAllData = useSelector((store) => store.users.users);
    const dispatch = useDispatch();

    const deleteHandle = (id) => {
        dispatch(deteleUser({data: usersAllData, id: id}));
    }
    
    return (
        <>
            {data?.map((data) => {
                return (
                    <div className='container'>
                        <div className="card">
                            <div className="card-title">
                                <p className='title'>{data?.title}</p>
                            </div>
                            <div className="card-body">
                                <p>{data?.body}</p>
                            </div>
                        <div className="cross-icon">
                            <RxCross2
                                className='icon'
                                onClick={() => deleteHandle(data.id)}
                            />
                        </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default UserDataCard;