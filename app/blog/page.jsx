import React from 'react';
import { postLetest } from '../../ApiRequest/ApiRequest';
import Link from 'next/link';

const page = async () => {
    const data = await postLetest()
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-10'>
                {
                    data.map((item, index) => {
                        return (
                            <Link key={index.toString()} href={"/details"} className='cart w-100 glass'>
                                <figure><img src={item['img']} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item["title"]}</h2>
                                    <p>{item["short"]}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div >
    );
};

export default page;