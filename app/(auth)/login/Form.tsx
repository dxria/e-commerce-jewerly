"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { signIn } from 'next-auth/react';

export default function Form() {
    const router = useRouter();
    const [info, setInfo] = useState({ email: "", password: "" });
    const [error, setError] = useState("")
    const [pending, setPending] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event
        setInfo((prev) => ({ ...prev, [(target as HTMLButtonElement).name]: (target as HTMLButtonElement).value }))
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        const { target } = event
        event.preventDefault();
        if (!info.email || !info.password) {
            setError("you have to provide credentials")
        }
        else {
            console.log(info)
            try {
                setPending(true);
                const res: any = await signIn("credentials", {
                    email: info.email,
                    password: info.password,
                    redirect: false,
                })
                if (res.error) {
                    setError("invalid email or password.")
                    setPending(false);
                    return;
                }
                router.replace("/")
                router.refresh()
            } catch (error) {
                console.log(error)
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
                        <h3 className='font-bold font-dmserifdisplay text-xl'>LOGIN</h3>
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
                        <button className='px-6 py-2 bg-indigo-500' disabled={pending ? true : false}>{pending ? "Loading..." : "Log in"}</button>
                    </div>
                    <div>
                        Don&apos;t have an account yet? <Link href='/register' className='text-indigo-500'>Register.</Link>
                    </div>

                </div>
            </form>
        </div>
    )
}
