import Login from "../components/auth/Login";
import {Suspense} from "react";

const LoginPage: React.FC = () => {
    return (
        <Suspense>
            <Login />
        </Suspense>
    );
};

export default LoginPage;
