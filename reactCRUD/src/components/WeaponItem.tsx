 import React, { useState}  from 'react';
 import { useHistory } from 'react-router-dom';

type WeaponItemProps = {
  weapon: {
    id: number;
    name: string;
    description: string;
    price: number;
    createdAt: string;
    image: string;
  };
};

const timeAgo = (timestamp: string): string => {
  const now = new Date();
  const createdDate = new Date(timestamp);

  const timeDifference = now.getTime() - createdDate.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours >= 24) {
      return `${createdDate.toLocaleString()}`; 
  } else if (hours >= 1) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes >= 1) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
      return 'a few seconds ago';
  }
};

const WeaponItem: React.FC<WeaponItemProps> = ({ weapon }) => {

  const history = useHistory();

  const [isEditing, setIsEditing] = useState(false);
  const [editedWeapon, setEditedWeapon] = useState({
    name: weapon.name,
    description: weapon.description,
    price: weapon.price,
  });

  const handleDelete = () => {
    fetch('http://localhost:3004/weapons/' + weapon.id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/')
    })
  };

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedWeapon((prevWeapon) => ({
      ...prevWeapon,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    fetch('http://localhost:3004/weapons/' + weapon.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedWeapon),
    }).then(() => {
      setIsEditing(false);
    });
  };

  return (
    <div key={weapon.id} className="weapon-box">
      <div className="img-box">
        <img src={weapon.image} alt={weapon.name} />
      </div>
      <h1>{isEditing ? <input type="text" name="name" value={editedWeapon.name} onChange={handleInputChange} /> : weapon.name}</h1>
      <p>{isEditing ? <textarea name="description" value={editedWeapon.description} onChange={handleInputChange} /> : weapon.description}</p>
      <p>{isEditing ? <input type="number" name="price" value={editedWeapon.price} onChange={handleInputChange} /> : `Weapon Price: $${weapon.price}`}</p>
      <p>Created At: {timeAgo(weapon.createdAt)}</p>
      <div className="button-wrapper"></div>
      <div className="button-wrapper">
        {isEditing ? (
          <button onClick={handleUpdate} className="save__button button">
            Save
          </button>
        ) : (
          <button onClick={handleToggleEdit} className="edit__button button">
            Edit
          </button>
        )}
        <button onClick={handleDelete} className="weapon-delete button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default WeaponItem;
