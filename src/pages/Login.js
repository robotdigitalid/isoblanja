import React from 'react';
import {Link} from 'react-router-dom';
import Image from 'components/Image';
import Input from 'components/Input';
import Button from 'components/Button';

function Login(props) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen max-h-screen">
            <Image src="https://member.kirim.email/img/ke-logo-dark.svg" className="h-24 w-24 mb-8" />
            <form>
                <div className="flex flex-col bg-white w-96 p-5 items-center rounded-xl space-y-4 shadow-md">
                    <h1 className="font-semibold text-purple-900 text-xl">Sign In</h1>
                    <Input name="email" placeholder="Username" autoComplete="email" />
                    <Input type="password" name="password" placeholder="Password" />
                    <Link to="/forgot" className="flex self-end items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        Forgot password?
                    </Link>
                    <div className="flex flex-col items-center space-y-2 w-full">
                        <Button>Sign In</Button>
                        <p className="text-base">Login with:</p>
                        <div className="flex space-x-4 items-center">
                            <Image src={require('assets/icons/google.svg').default} className="h-8 w-8 rounded-md" />
                            <Image src={require('assets/icons/facebook.svg').default} className="h-8 w-8 rounded-md" />
                            <Image src={require('assets/icons/whatsapp.svg').default} className="h-8 w-8 rounded-md" />
                        </div>
                    </div>
                    <p>Don't have an account? <Link to="/register" className="font-medium text-indigo-500">Sign Up</Link></p>
                </div>
            </form>
        </div>
    );
}

export default Login;