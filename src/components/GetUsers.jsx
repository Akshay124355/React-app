import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUsers } from '../redux/userSlice'
import axios from "axios"

const GetUsers = () => {
    const dispatch = useDispatch();

    const getUsers = async () => {
        try {
            const data = await axios.get("https://jsonplaceholder.typicode.com/posts")
            dispatch(addUsers(data.data))
        }
        catch (error) {
            console.log(error, "error");
        }
    }
    useEffect(() => {
        setTimeout(() => {
            getUsers()
        }, 5000);
    }, []);

}

export default GetUsers
