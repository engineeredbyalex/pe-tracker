import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import UnderDevelopment from "../../components/UnderDevelopment";

export default function FitnessPage() {
    const [trackingData, setTrackingData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { data: session } = useSession();

    return (
        <Layout>
            {/* <div className="flex flex-col gap-5 justify-start min-h-screen lg:w-1/2 w-full">
                <div className='w-full text-center text-purple-500 font-bold border-b border-purple-700 py-3'>
                    <h3 className="uppercase font-bold w-full">Tracking your data</h3>
                    <p className="font-normal w-full">
                        Here you can include any fitness related activity, this will also  help in getting more stats.
                        If there is any option missing and you want it to be added, feel free to contact me and i will add it.
                    </p>
                </div>
                <button className="py-2 px-10 w-full  rounded-md text-[#fff] bg-green-500 hover:bg-green-600 text-center cursor-pointer transition-all ease-in-out">
                    <Link href="../tracking/new">
                        <p>Create new tracking data</p>
                    </Link>
                </button>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        {trackingData.map((data, index) => (
                            <div className="border-b border-purple-700 py-5" key={data._id}>
                                <h5 className='text-purple-700 text-center mb-2'>Date: {(new Date(data.createdAt)).toLocaleString()}</h5>
                                <div className='flex flex-col gap-5 w-full'>

                                    <button className="w-full py-2 px-10 rounded-md text-[#fff] bg-purple-500 hover:bg-purple-600 text-center cursor-pointer transition-all ease-in-out">
                                        <Link href={'/tracking/edit/' + data._id}>
                                            Edit / View the data
                                        </Link>
                                    </button>
                                    <button className="w-full py-2 px-10 rounded-md text-[#fff] bg-red-500 hover:bg-red-600 text-center cursor-pointer transition-all ease-in-out" onClick={() => handleDelete(data._id)}>
                                        <p>Delete</p>
                                    </button>

                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div> */}
            <UnderDevelopment/>
        </Layout>
    )
}