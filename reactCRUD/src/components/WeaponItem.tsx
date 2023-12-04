 import React  from 'react';
 import { useHistory } from 'react-router-dom';

type WeaponItemProps = {
  weapon: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
};

const WeaponItem: React.FC<WeaponItemProps> = ({ weapon }) => {

  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:3004/weapons/' + weapon.id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/')
    })
  };

  return (
    <div key={weapon.id} className="weapon-box">
      <div className="img-box">
        <img src={weapon.image} alt={weapon.name} />
      </div>
      <h1>{weapon.name}</h1>
      <p>{weapon.description}</p>
      <p>Weapon Price: ${weapon.price}</p>
      <div className="button-wrapper">
        <button className="weapon-edit edit__button button">
          Edit
        </button>
        <button onClick={handleClick} className="weapon-delete button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default WeaponItem;
