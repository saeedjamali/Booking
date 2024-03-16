import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

function Login() {
    const [email, setEmail] = useState("s@gmail.com");
    const [password, setPassword] = useState("1234");
    const navigate = useNavigate();
    const { user, isAuthenticated, login, logout } = useAuth();
    const handleLogin = (e) => {
        e.preventDefault();
        if (email && password) login(email, password);

    }

    useEffect(
        () => {
            if (isAuthenticated) navigate("/", { replace: true });
        }
        , [isAuthenticated]);

    return (
        <div className='p-4 mt-16 center w-full h-[calc(100vh-7rem)] '>
            <div className='w-2/5 center'>
                <form onSubmit={handleLogin} className='w-full p-4 box-border rounded-md ring-purple-300 ring-1'>
                    <span className='font-extrabold'>Login</span>
                    <div className='flex flex-col items-start mt-4 text-base font-bold'>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-full mt-2 rounded-md ring-purple-200 ring-1' />
                    </div>
                    <div className='flex flex-col items-start mt-4 text-base font-bold'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className='mt-2 w-full rounded-md ring-purple-200 ring-1' />
                    </div>
                    <button className='w-full p-2 center bg-purple-500 text-white rounded-md mt-4' onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login