import { Navigate,Outlet } from "react-router";
const useAuth =()=>{
    const user={ signedIn: localStorage.getItem('Name') ? true : false };
    console.log('asdasda  ', localStorage.getItem('Name'));
    return user && user.signedIn;
};

const ProtectedRoutes = () =>{
    const isAuth=useAuth();
    return isAuth ? <Outlet /> : <Navigate to ="/" />;
};
export default ProtectedRoutes;


// import React from 'react';
// import { Route, Redirect } from "react-router-dom";

// const ProtectedRoutes = ({ component: Component, auth, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         auth === true
//             ? <Component {...props} />
//             : <Redirect to='/' />
//     )} />
// )

// export default ProtectedRoutes;