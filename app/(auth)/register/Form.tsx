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
        <div className='w-screen mt-32 flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='w-[30%]'>
                <div className=''>
                    <div className='text-center'>
                        <h3 className='font-bold font-dmserifdisplay text-xl'>REGISTER</h3>
                    </div>
                    <div className='my-3'>
                        <div>
                            <label className='font-bold text-sm font-raleway my-1'>Username</label>
                            <input type='text' name='username' className="border-2 border-rich-bordeaux rounded-md px-5 py-2 w-full font-raleway text-sm" onChange={handleChange} />
                        </div>
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
                        <button className='px-6 py-2 w-60 font-raleway font-semibold bg-rich-bordeaux border-2 border-rich-bordeaux rounded-md text-[#FFF]' disabled={pending ? true : false}>{pending ? "Registering..." : "Register"}</button>
                    </div>


                </div>
            </form>
        </div>
    )
}
