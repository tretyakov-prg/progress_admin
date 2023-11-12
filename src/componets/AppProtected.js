import { Navigate, Outlet } from "react-router-dom";
import AuthService from "../services/auth.service";

function AppProtected () {
    const RoleUser = AuthService.getRoleUser();
    return RoleUser ? <Outlet /> : <Navigate to="/" />;
}

export default AppProtected;