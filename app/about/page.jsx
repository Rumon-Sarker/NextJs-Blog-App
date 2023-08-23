import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <h1 className="text-3xl font-extrabold my-5 underline">About Us:</h1>
            <p>Welcome to our About page! We are a dedicated team... Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ratione mollitia dolores adipisci perspiciatis voluptas eligendi molestiae corporis at harum accusantium temporibus officia omnis assumenda autem vel quia error. Maiores.</p>
            <p>
                Want to learn more about our services?
            </p>
            <button className="bg-black w-20 rounded my-4"><Link href={'/blog'} >Blog... </Link></button>
        </div>
    );
}
export default page;