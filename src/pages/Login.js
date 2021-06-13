import React from 'react';
import {Link} from 'react-router-dom';
import Image from 'components/Image';
import Input from 'components/Input';
import Button from 'components/Button';

function Login(props) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen max-h-screen">
            <Image src="https://member.kirim.email/img/ke-logo-dark.svg" className="h-24 w-24 mb-8" />
            <div className="flex flex-col bg-white w-96 p-5 items-center rounded-xl space-y-5">
                <h1 className="font-semibold text-purple-900 text-xl">Sign In</h1>
                <Input name="email" placeholder="Username" autoComplete="email" />
                <Input type="password" name="password" placeholder="Password" />
                <Button>Sign In</Button>
                <p>Don't have an account? <Link to="/register" className="font-medium text-indigo-500">Sign Up</Link></p>
            </div>
        </div>
    );
}

export default Login;