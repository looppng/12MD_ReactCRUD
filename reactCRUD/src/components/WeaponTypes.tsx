type Weapon = {
    id: number;
    name: string;
    description: string;
    price: number;
};

type WeaponsContextType = {
    weapons: Weapon[];
    setWeapons: React.Dispatch<React.SetStateAction<Weapon[]>>;
};

export { WeaponsContextType, Weapon };
