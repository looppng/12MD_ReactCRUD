import { useState }  from 'react';
import { useWeaponsContext } from "./WeaponsContext";
import { Weapon } from './WeaponTypes';

type WeaponItemProps = {
  weapon: Weapon;
};

const WeaponItem: React.FC<WeaponItemProps> = ({ weapon}) => {

  const { setWeapons } = useWeaponsContext();

  const [isEditing, setIsEditing] = useState(false);
  const [editedWeapon, setEditedWeapon] = useState<Weapon>({
    ...weapon,
  });

  const handleDelete = () => {
    fetch('http://localhost:3001/weapons/' + weapon.id, {
      method: 'DELETE',
    })
        .then(response => response.json())
        .then(() => {
          setWeapons((prevWeapons) => prevWeapons.filter((w) => w.id !== weapon.id));
        })
        .catch((error) => console.error('Error deleting weapon:', error));
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
    fetch('http://localhost:3001/weapons/edit/' + weapon.id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedWeapon),
    })
        .then(() => fetch('http://localhost:3001/weapons'))
        .then((response) => response.json())
        .then((updatedWeapons) => {
          setWeapons(updatedWeapons);
          setIsEditing(false);
        })
        .catch((error) => console.error('Error updating weapon:', error));
  };


  return (
    <div key={weapon.id} className="weapon-box">
      <h1>{isEditing ? <input type="text" name="name" value={editedWeapon.name} onChange={handleInputChange} /> : weapon.name}</h1>
      <p>{isEditing ? <textarea name="description" value={editedWeapon.description} onChange={handleInputChange} /> : weapon.description}</p>
      <p>{isEditing ? <input type="number" name="price" value={editedWeapon.price} onChange={handleInputChange} /> : `Weapon Price: $${weapon.price}`}</p>
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
