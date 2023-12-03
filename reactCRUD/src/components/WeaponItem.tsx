 import React from 'react';

type WeaponItemProps = {
  weapon: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
  handleDelete: (weaponId: number) => void;
};

const WeaponItem: React.FC<WeaponItemProps> = ({ weapon, handleDelete }) => 
(
  <div key={weapon.id} className="weapon-box">
    <div className="img-box">
      <img src={weapon.image} alt={weapon.name} />
    </div>
    <h1>{weapon.name}</h1>
    <p>{weapon.description}</p>
    <p>Weapon Price: ${weapon.price}</p>
    <div className="button-wrapper">
      <button className="weapon-edit edit__button button" data-weapon-id={weapon.id}>
        Edit
      </button>
      <button onClick={() => handleDelete(weapon.id)} className="weapon-delete button" data-weapon-id={weapon.id}>
        Delete
      </button>
    </div>
  </div>
);

export default WeaponItem;
