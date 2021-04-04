import React from 'react';
import LoginCard from "../components/LogCard"


function LoginPage() {
    return (
        <div>
            <h1>Please Login</h1>
            <LoginCard />
            <div>
                <h3>Or signup</h3>
                <a name="" id="" class="btn btn-primary" href="/signup" role="button">SignUp</a>
            </div>
        </div>
    );
}

export default LoginPage;