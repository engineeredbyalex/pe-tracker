import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
function Tracking() {
  const [trackingData, setTrackingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchTrackingData = async () => {
      try {
        const response = await axios.get('/api/tracking', {
          headers: {
            'Content-Type': 'application/json',
            'User-Email': session?.user?.email
          }
        });
        setTrackingData(response?.data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching tracking data:', error);
        setLoading(true)
      }
    };


    fetchTrackingData();
  }, [session?.user?.email]);

  return (
    <Layout>
      
      <div className="flex flex-col gap-5 justify-start min-h-screen">
        <div className='w-full text-center text-purple-500 uppercase font-bold border-b border-purple-700 py-3'>
          <h3>Tracking your data</h3>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {trackingData.map((data, index) => (
              <div key={data._id}>
                <p className='text-purple-700 text-center mb-2'>Date: {(new Date(data.createdAt)).toLocaleString()}</p>
                <div className='flex flex-row gap-5 w-full'>
                  <button className="w-1/2 py-2 px-10 rounded-md text-[#fff] bg-purple-500 hover:bg-purple-700 text-center cursor-pointer transition-all ease-in-out">
                    <p>Edit</p>
                  </button>
                  <button className="w-1/2 py-2 px-10 rounded-md text-[#fff] bg-red-500 hover:bg-red-600 text-center cursor-pointer transition-all ease-in-out">
                    <Link href={'/tracking/delete/' + data._id}>
                      <p>Delete</p>
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
        <button className="py-2 px-10 w-full m rounded-md text-[#fff] bg-green-500 hover:bg-green-600 text-center cursor-pointer transition-all ease-in-out">
          <Link href="../tracking/new">
            <p>Create New</p>
          </Link>
        </button>
      </div>
    </Layout>
  );
}

export default Tracking;
