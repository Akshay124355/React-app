import React, { useRef, useState } from 'react'
// import { validateData } from "../utils/validateData"
import { useDispatch } from 'react-redux';

const FeedBackForm = () => {
    const [error, setError] = useState(null)
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>

                <input type="text"
                    ref={password}
                    placeholder='First Name'
                    className='p-3 my-4 w-full bg-gray-700 border-none'
                />
                <input type="text"
                    ref={password}
                    placeholder='Last Name'
                    className='p-3 my-4 w-full bg-gray-700 border-none'
                />
                <input type="text"
                    ref={password}
                    placeholder='Country'
                    className='p-3 my-4 w-full bg-gray-700 border-none'
                />
                <textarea name="Address" id="" cols="30" rows="10"></textarea>

                <input type="email"
                    ref={email}
                    placeholder='Email or phone number'
                    className='p-3 my-4 w-full bg-gray-700 border-none'
                />

                <input type="number"
                    // ref={number}
                    placeholder='Phone number'
                    className='p-3 my-4 w-full bg-gray-700 border-none'
                />
                <p className='text-red-500'>{error}</p>

                <button className='p-3 my-5 bg-red-500 w-full font-bold rounded-lg'
                    // onClick={handleSignin}
                >SubmitFeedback</button>


            </form>
        </div >
    )
}

export default FeedBackForm;

