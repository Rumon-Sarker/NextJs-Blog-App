'use client'
import React from 'react';
const page = () => {

    return (
        <div className="ml-80 mt-11">
            <h1 className="font-extrabold text-2xl ml-24">Enter Your Info</h1>
            <form className="container mt-4">
                <div className="mt-14 ">
                    <label className="mt-10" htmlFor="name">Name:</label><br />
                    <input className='w-1/2 h-10' type="text" id="name" />
                </div>
                <div className="mt-4">
                    <label className="mt-10" htmlFor="email">Email:</label><br />
                    <input className='w-1/2 h-10' type="email" id="email" />
                </div>

                <div className="mt-6">
                    <label for="subject">Subject:</label><br />
                    <textarea className='h-60 mt-3 w-1/2' id="subject" name="subject" placeholder="Write something"></textarea>
                    <br />
                </div>

                <button className="font-extrabold mb-20 bg-black mt-2 w-40 rounded-xl" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default page;