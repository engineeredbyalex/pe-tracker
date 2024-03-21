import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from 'next-auth/react';
import Link from 'next/link';

function Tracking() {
  const [trackingData, setTrackingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  const fetchTrackingData = async () => {
    try {
      const response = await axios.get('/api/tracking', {
        headers: {
          'Content-Type': 'application/json',
          'User-Email': session?.user?.email
        }
      });
      setTrackingData(response?.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tracking data:', error);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchTrackingData();
  }, [session?.user?.email]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/tracking?id=${id}`);

      // Refetch tracking data after successful deletion
      fetchTrackingData();
    } catch (error) {
      console.error('Error deleting tracking entry:', error);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col gap-5 justify-start min-h-screen lg:w-1/2 w-full">
        <div className='w-full text-center text-purple-500 font-bold border-b border-purple-700 py-3'>
          <h3 className="uppercase font-bold w-full">Tracking your data</h3>
          <p className="font-normal w-full">
            Please add your equipment, so you can use it for the exercise tab,
            e.g., you do 5 mins of pumping at 5hg, so you register the 5 mins
            and the pressure and use the equipment registered here.
          </p>
        </div>
        <button className="py-2 px-10 w-full  rounded-md text-[#fff] bg-green-500 hover:bg-green-600 text-center cursor-pointer transition-all ease-in-out">
          <Link href="../tracking/new">
            <p>Create New</p>
          </Link>
        </button>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {trackingData.map((data, index) => (
              <div key={data._id}>
                <p className='text-purple-700 text-center mb-2'>Date: {(new Date(data.createdAt)).toLocaleString()}</p>
                <div className='flex flex-col gap-5 w-full'>
                  <button className="w-full py-2 px-10 rounded-md text-[#fff] bg-purple-500 hover:bg-purple-700 text-center cursor-pointer transition-all ease-in-out">
                    <Link href={'/tracking/edit/' + data._id}>
                      <p>Edit</p>
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
      </div>
    </Layout>
  );
}

export default Tracking;
