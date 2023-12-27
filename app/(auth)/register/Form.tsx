"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Form() {
    const router = useRouter();
    const [info, setInfo] = useState({ username: "", email: "", password: "" });
    const [error, setError] = useState("")
    const [pending, setPending] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event
        setInfo((prev) => ({ ...prev, [(target as HTMLButtonElement).name]: (target as HTMLButtonElement).value }))

    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        const { target } = event
        event.preventDefault();
        if (!info.username || !info.email || !info.password) {
            setError("you have to provide credentials.")
        }
        else {
            try {
                setPending(true);
                const res = await fetch("api/auth/register", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(info)
                });
                if (res.ok) {
                    setPending(false);
                    const form = target as HTMLFormElement;
                    form.reset();
                    router.push("/login")
                    console.log("user registered.")
                }
                else {
                    const errorData = await res.json();
                    setError(errorData.message)
                    setPending(false);
                    console.log("user is not registered.")

                }
            } catch (error) {
                setPending(false);
                setError("smth went wrong")
            }
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className=''>
                    <div className='text-center'>
                        <h3 className='font-bold font-dmserifdisplay text-xl'>REGISTER</h3>
                    </div>
                    <div className='my-3'>
                        <div className='flex space-x-5'>
                            <input type='text' name='username' onChange={handleChange} />
                            <label>Username</label>
                        </div>
                    </div>
                    <div className='my-3'>
                        <div className='flex space-x-5'>
                            <input type='text' name='email' onChange={handleChange} />
                            <label>Email</label>
                        </div>
                    </div>
                    <div className='my-3'>
                        <div className='flex space-x-5'>
                            <input type='text' name='password' onChange={handleChange} />
                            <label>Password</label>
                        </div>
                    </div>
                    {error && <span>{error}</span>}
                    <div>
                        <button className='px-6 py-2 bg-indigo-500' disabled={pending ? true : false}>{pending ? "Registering..." : "Register"}</button>
                    </div>

                </div>
            </form>
        </div>
    )
}
