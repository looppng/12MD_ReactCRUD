import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

type Weapon = {
  name: string;
  description: string;
  price: number;
};

const WeaponForm: React.FC = () => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const weapon: Weapon = { name, description, price };

    setIsLoading(true);

    fetch('http://localhost:3001/weapons/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(weapon)
    }).then(() => {
        console.log("new weapon added");
        setIsLoading(false);
    })

    history.push('/')
  };
  

  return (
    <form onSubmit={handleSubmit} className="weapon-form">
      <input
        className="weapon-form__input"
        type="text"
        name="weapon"
        placeholder="Insert Weapon Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="weapon-form__input"
        type="text"
        name="weapon-description"
        placeholder="Insert Weapon Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="weapon-form__input"
        type="number"
        name="weapon-price"
        placeholder="Insert Weapon Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <div className="button-wrapper">
        {!isLoading && <button className="button add__button" type="submit">Add Weapon</button>}
        {isLoading && <button className="button add__button" type="submit" disabled>Adding Weapon...</button>}
      </div>
    </form>
  );
};

export default WeaponForm;
