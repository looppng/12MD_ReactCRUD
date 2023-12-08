import WeaponItem from "./WeaponItem";
import useFetch from "./useFetch";


const WeaponWrapper = () => {

  const {data, isLoading, error} = useFetch('http://localhost:3001/weapons');

    return ( 
        <div className="weapon-wrapper">
        { error && <div className="error-msg">{error}</div>}
        { isLoading && <div className="error-msg">Loading...</div>}
        { data.map((weapon) => (
            <WeaponItem key={weapon.id} weapon={weapon}/>
        ))}
        </div>
     );
}
 
export default WeaponWrapper;
