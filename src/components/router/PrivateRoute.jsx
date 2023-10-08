import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    console.log(location)
    if (loading) {
        return <>
            <div className="h-screen w-full flex items-center justify-center">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        </>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.object
}

export default PrivateRoute;