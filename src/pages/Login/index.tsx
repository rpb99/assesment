import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/user';
import { loginUser } from '../../services/userApi';
import { useMutation } from "react-query";
import { useNavigate } from 'react-router-dom'

const initialState = {
    email: "",
    password: ""
}


const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [stateUser, setStateUser] = useState(initialState)
    const [error, setError] = useState(initialState)

    const { isLoading: isLogging, mutate: postLoggedIn } = useMutation(
        async () => {
            return await loginUser(stateUser)
        },
        {
            onSuccess: (res) => {
                const token = res.data.data.data.access_token

                localStorage.setItem('@acc_token', token)
                dispatch(getUser(res.data.data.user))
                navigate('/admin')

            },
            onError: (err: any) => {
                alert(err.response.data?.message)
            },
        }
    );




    const handleLogin = async (e: any) => {
        e.preventDefault()
        if (!stateUser.email.includes('@')) return alert('Masukkan email dengan benar.')
        if (!stateUser.email) setError(state => ({ ...state, email: 'email harus diisi' }))
        if (!stateUser.password) setError(state => ({ ...state, password: 'password harus diisi' }))
        if (!stateUser.email || !stateUser.password) return
        postLoggedIn()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setError(state => ({ ...state, [name]: '' }))

        setStateUser(state => ({ ...state, [name]: value }))
        if (!value) return setError(state => ({ ...state, [name]: `${name} harus diisi` }))
    }

    return (
        <div className='mt-24'>
            <div className="text-2xl text-center font-bold my-6">Login</div>
            <div className="font-bold w-96 mx-auto bg-gray-100 p-12 rounded-xl">
                <form action="">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-400 text-sm" htmlFor="">Email</label>
                            <input name='email' type="email" onChange={handleChange} required/>
                            <div className="text-red-600 text-xs font-normal">{error.email}</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-400 text-sm" htmlFor="">Password</label>
                            <input name='password' type="password" onChange={handleChange} />
                            <div className="text-red-600 text-xs font-normal">{error.password}</div>
                        </div>
                    </div>
                    <div className="mx-4 mt-6">
                        <button className='w-full bg-blue-600 rounded-3xl py-1 text-white' onClick={handleLogin}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login