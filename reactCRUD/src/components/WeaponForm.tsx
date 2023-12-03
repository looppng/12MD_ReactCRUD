import { useState, ChangeEvent } from 'react';
 
type Weapon = {
    name: string;
    description: string;
    price: number;
};

  const WeaponForm: React.FC = () => {
    const [newWeapon, setNewWeapon] = useState<Weapon>({
        name: "",
        description: "",
        price: 0,
    });

    const handleInputChange = () => {
        console.log("clicked form");
    };
    
 
    return (
    <form className="weapon-form">
        <input 
            className="weapon-form__input" 
            type="text" 
            name="weapon" 
            placeholder="Insert Weapon Name"
            value={newWeapon.name}
            onChange={handleInputChange}
        />  
        <input 
            className="weapon-form__input" 
            type="text" 
            name="weapon-description" 
            placeholder="Insert Weapon Description"
            value={newWeapon.description}
            onChange={handleInputChange}
        />
        <input 
            className="weapon-form__input" 
            type="number" 
            name="weapon-price" 
            placeholder="Insert Weapon Price"
            value={newWeapon.price}
            onChange={handleInputChange}
        />
        <input 
            className="weapon-form__input" 
            type="file" 
            accept="png" 
            name="weapon-image"
            onChange={handleInputChange}
        />
        <div className="button-wrapper">
            <button className="button add__button" type='button'>Add Weapon</button>
        </div>
    </form>
    );
}
 
export default WeaponForm;