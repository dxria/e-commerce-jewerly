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
        <aside>

            <button onClick={() => {
                let gold = 'gold'
                
                router.push(`${pathname}?${createQueryString("metal", gold.toString())}`)
            }}>gold</button>

            <button onClick={() => {
                let silver = 'silver'
                router.push(`${pathname}/?${createQueryString("metal", silver.toString())}`)
            }}>silver</button>
        </aside>
    )
}
