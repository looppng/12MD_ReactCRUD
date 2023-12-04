import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2 className="error-msg">404</h2>
            <p className="error-msg">This page cannot be found</p>
            <Link to= "/" className="nav-link">Back to Home...</Link>
        </div>
     );
}
 
export default NotFound;