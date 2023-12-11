import { createContext, useContext, useState } from 'react';
import { WeaponsContextType, Weapon } from './WeaponTypes';

type WeaponsContextType = {
    weapons: Weapon[];
    setWeapons: React.Dispatch<React.SetStateAction<Weapon[]>>
}

const WeaponsContext = createContext<WeaponsContextType | undefined>(undefined);

export const WeaponsProvider = ({ children }) => {
    const [weapons, setWeapons] = useState<Weapon[]>([]);

    return (
        <WeaponsContext.Provider value={{ weapons, setWeapons}}>
            {children}
        </WeaponsContext.Provider>
    );
};


export const useWeaponsContext = () => {
    const context = useContext(WeaponsContext);
    if (!context) {
        throw new Error('useWeaponsContext must be used within a WeaponsProvider');
    }
    return context;
}
