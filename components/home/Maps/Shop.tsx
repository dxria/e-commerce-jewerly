import React from 'react'

type AddressesType =
    {
        address: {
            id: string,
            city: string;
            street:string;
            workHours: string;
            phoneNumber: string;
        };
    }

export default function Shop({ address }: AddressesType) {
    return (
        <div>
            <div><b>{address.city}</b></div>
            <div><i>Address:</i> {address.street}</div>
            <div><i>Working hours:</i> {address.workHours}</div>
            <div><i>Phone Number</i> {address.phoneNumber}</div>

    </div>
    )
}
