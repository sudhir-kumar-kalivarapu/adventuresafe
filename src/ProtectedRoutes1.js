import { Navigate,Outlet } from "react-router";
const useAuth =()=>{
    const user={ signedIn: localStorage.getItem('Name') ? false : true };
    console.log('asdasda  ', localStorage.getItem('Name'));
    return user && user.signedIn;
};

const ProtectedRoutes1 = () =>{
    const isAuth=useAuth();
    return isAuth ? <Outlet /> : <Navigate to ="/dashboard" />;
};
export default ProtectedRoutes1;