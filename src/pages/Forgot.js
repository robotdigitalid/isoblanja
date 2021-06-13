import React from 'react';
import Image from "../components/Image";
import Input from "../components/Input";
import {Link} from "react-router-dom";
import Button from "../components/Button";

function Forgot(props) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen max-h-screen">
            <Image src="https://member.kirim.email/img/ke-logo-dark.svg" className="h-24 w-24 mb-8" />
            <form>
                <div className="flex flex-col bg-white w-96 p-5 items-center rounded-xl space-y-4 shadow-md">
                    <h1 className="font-semibold text-purple-900 text-xl">Sign In</h1>
                    <Input name="email" placeholder="Username" autoComplete="email" />
                    <div className="flex space-x-4 w-full">
                        <Button className="bg-transparent border border-gray-500 text-gray-700">Cancel</Button>
                        <Button>Search</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Forgot;