import React from 'react'

type AdressesType =
    {
        adress: {
            city: string;
            street:string;
            workHours: string;
            phoneNumber: string;
        };
    }

export default function Shop({ adress }: AdressesType) {
    return (
        <div>
            <div><b>{adress.city}</b></div>
            <div><i>Adress:</i> {adress.street}</div>
            <div><i>Working hours:</i> {adress.workHours}</div>
            <div><i>Phone Number</i> {adress.phoneNumber}</div>

    </div>
    )
}
