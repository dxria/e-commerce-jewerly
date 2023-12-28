"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { signIn } from 'next-auth/react';
import LogInWithGoogle from './LogInWithGoogle';


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
        <div className='w-screen mt-32 flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='w-[30%]'>
                <div className=''>
                    <div className='text-center'>
                        <h3 className='font-bold font-dmserifdisplay text-xl'>LOGIN</h3>
                    </div>
                    <div className='my-3'>
                        <div>
                            <label className='font-bold text-sm font-raleway my-1'>Email</label>
                            <input type='text' name='email' className="border-2 border-rich-bordeaux rounded-md px-5 py-2 w-full font-raleway text-sm" onChange={handleChange} />
                        </div>
                    </div>
                    <div className='my-3'>
                        <div>
                            <label className='font-bold text-sm font-raleway my-1'>Password</label>
                            <input type='password' name='password' className="border-2 border-rich-bordeaux rounded-md px-5 py-2 w-full" onChange={handleChange} />
                        </div>
                    </div>
                    {error && <div className='my-3 font-raleway'>{error}</div>}
                    <div className='flex justify-center'>
                        <button className='px-6 py-2 w-60 font-raleway font-semibold bg-rich-bordeaux border-2 border-rich-bordeaux rounded-md text-[#FFF]' disabled={pending ? true : false}>{pending ? "Loading..." : "Log in"}</button>
                    </div>
                    <div className='my-1 font-raleway flex justify-center'>or</div>
                    <div className='flex justify-center'>
                        <div className=''><LogInWithGoogle/></div>
                    </div>
                    <div className=' my-3 font-raleway'>
                        Don&apos;t have an account yet? <Link href='/register' className='py-1 underline'>Register.</Link>
                    </div>

                </div>
            </form>
        </div>
    )
}
