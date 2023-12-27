import React from 'react'
import Shop from './Shop';
type AddressesTypeProps =
    {
        addresses: {
            id: string,
            city: string;
            street:string;
            workHours: string;
            phoneNumber: string;
        }[];
    }

export default function ShopAdresses({addresses} : AddressesTypeProps) {
  return (
    <div>
        {addresses?.map((address, index) => (
          <Shop key={index} address={address} />
        ))}
      </div>
  )
}

