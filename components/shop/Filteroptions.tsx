"use client"

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

export default function Filteroptions() {
    const searchParams = useSearchParams()!;
    const router = useRouter()
    const pathname = usePathname()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);
            return params.toString();
        },
        [searchParams]
    )

    return (
        <aside className="mt-5 m-2">
            <div className="mb-2 text-left font-raleway text-rich-bordeaux font-bold">
                Metal
            </div>
            <div>
                 <button className="flex justify-around gap-2 w-32 font-raleway border-2 rounded-full border-grey-rose px-5 py-2 mb-2"
                    onClick={() => {
                        let gold = 'gold'
                        router.push(`${pathname}?${createQueryString("metal", gold.toString())}`)
                    }}>
                    <div className="w-6 h-6 bg-[#D4AF37] rounded-full"></div>
                    <div>gold</div>
                </button>
            </div>

            <div>
                <button className="flex justify-around gap-2 w-32 font-raleway border-2 rounded-full border-grey-rose px-5 py-2 mb-2"
                    onClick={() => {
                        let silver = 'silver'
                        router.push(`${pathname}/?${createQueryString("metal", silver.toString())}`)
                    }}>
                    <div className="w-6 h-6 bg-[#A8A9AD] rounded-full"></div>
                    <div>silver</div>

                </button>
            </div>

        </aside>
    )
}
