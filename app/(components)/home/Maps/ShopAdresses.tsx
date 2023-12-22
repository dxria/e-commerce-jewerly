import React from 'react'
import Shop from './Shop';
type AdressesTypeProps =
    {
        adresses: {
            city: string;
            street:string;
            workHours: string;
            phoneNumber: string;
        }[];
    }

export default function ShopAdresses({adresses} : AdressesTypeProps) {
  return (
    <div>
        {adresses?.map((adress, index) => (
          <Shop key={index} adress={adress} />
        ))}
      </div>
  )
}

