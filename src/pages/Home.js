import React from 'react';
import Image from 'components/Image';
import Button from 'components/Button';
import {useHistory} from "react-router-dom";


function Home(props) {
    const route = useHistory();

    return (
        <div className="flex flex-col items-center p-3 mx-auto space-y-3 bg-[#263452] h-screen">
            <Image src={require('assets/images/logo.png').default} className="h-24 w-24 lg:h-36 lg:w-36" />
            <h1 className="font-bold text-white text-center text-xl lg:text-3xl pb-6">Selamat datang, ada yang bisa kami bantu?</h1>
            <Button
                className="lg:w-1/2 bg-green-500 hover:bg-green-600"
                onClick={() => route.push('/products')}
            >
                Saya mau belaja, bisa lihat menunya?
            </Button>
            <Button
                className="lg:w-1/2 hover:bg-blue-600"
                onClick={() => route.push('/contacts')}
            >
                Saya pengin ngobrol, apakah bisa?
            </Button>
            <Button
                className="lg:w-1/2 bg-yellow-500 hover:bg-yellow-600"
                onClick={() => route.push('/member')}
            >
                Pesanan saya sudah sampai mana ya?
            </Button>
            <Button
                className="lg:w-1/2 bg-red-500 hover:bg-red-600"
                onClick={() => route.push('/affiliate')}
            >
                Saya mau ikut memasarkan, boleh?
            </Button>
        </div>
    );
}

export default Home;