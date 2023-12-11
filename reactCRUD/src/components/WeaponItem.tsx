import { useState, useEffect }  from 'react';
import { useWeaponsContext } from "./WeaponsContext";
import { Weapon } from './WeaponTypes';
import apiRequest from './apiUtils';

type WeaponItemProps = {
  weapon: Weapon;
};

const WeaponItem: React.FC<WeaponItemProps> = ({ weapon}) => {

  const { setWeapons } = useWeaponsContext();

  const [isEditing, setIsEditing] = useState(false);
  const [editedWeapon, setEditedWeapon] = useState<Weapon>({
    ...weapon,
  });
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
      if (isDeleting || isUpdating) {
          window.location.reload();
      }
  }, [isDeleting, isUpdating]);

  const handleDelete = () => {
    setIsDeleting(true);

    apiRequest(`http://localhost:3001/weapons/${weapon.id}`, 'DELETE')
        .then(() => setWeapons((prevWeapons) => prevWeapons.filter((w) => w.id !== weapon.id)))
        .finally(() => setIsDeleting(false));
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
    setIsUpdating(true);

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
        .catch((error) => console.error('Error updating weapon:', error))
        .finally(() => setIsUpdating(false));
  };


  return (
      <div key={weapon.id} className="weapon-box">
        <h1>
          {isEditing ? (
              <input
                  type="text"
                  name="name"
                  value={editedWeapon.name}
                  onChange={handleInputChange}
              />
          ) : (
              weapon.name
          )}
        </h1>
        <p>
          {isEditing ? (
              <textarea
                  name="description"
                  value={editedWeapon.description}
                  onChange={handleInputChange}
              />
          ) : (
              weapon.description
          )}
        </p>
        <p>
          {isEditing ? (
              <input
                  type="number"
                  name="price"
                  value={editedWeapon.price}
                  onChange={handleInputChange}
              />
          ) : (
              `Weapon Price: $${weapon.price}`
          )}
        </p>
        <div className="button-wrapper">
          {isEditing ? (
              <button
                  onClick={handleUpdate}
                  className="save__button button"
                  disabled={isUpdating}
              >
                {isUpdating ? 'Updating...' : 'Save'}
              </button>
          ) : (
              <button
                  onClick={handleToggleEdit}
                  className="edit__button button"
                  disabled={isDeleting || isUpdating}
              >
                {isDeleting || isUpdating ? 'Processing...' : 'Edit'}
              </button>
          )}
          <button
              onClick={handleDelete}
              className="weapon-delete button"
              disabled={isDeleting || isUpdating}
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
  );
};

export default WeaponItem;
