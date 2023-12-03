import WeaponItem from "./WeaponItem";
import React, { useState, useEffect } from 'react';

type Weapon = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    createdAt: string;
  };

const WeaponWrapper = () => {

    const [data, setData] = useState<Weapon[]>([]);

    useEffect(() => {
      fetch('http://localhost:3004/weapons')
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log(data);
          setData(data);
        });
    }, []);

    const handleDelete = (id: number) => {
        const newWeapons = data.filter(data => data.id !== id);
        setData(newWeapons);
    };

    return ( 
        <div className="weapon-wrapper">
        {data.map((weapon) => (
            <WeaponItem key={weapon.id} weapon={weapon} handleDelete={handleDelete}/>
        ))}
        </div>
     );
}
 
export default WeaponWrapper;