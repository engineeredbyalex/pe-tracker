// importing useEffect and useState
import { useEffect, useState } from 'react';
// importing Layout
import Layout from '../../components/Layout';
// importing axios
import axios from 'axios';
// importing tracking form
import TrackingForm from '../../components/Forms/TrackingForm';
import Link from 'next/link';

function Tracking() {
  const [trackingData, setTrackingData] = useState([]);

  useEffect(() => {
    axios.get('/api/tracking').then(response => {
      setTrackingData(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <Layout>
      <div className="flex flex-col gap-5">
        {trackingData.map((data, index) => (
          <div key={data._id}>
            <p>Date: {(new Date(data.createdAt)).toLocaleString()}</p>
            <div className='flex flex-row gap-5'>
              <button className="py-2 px-10 rounded-md text-[#fff] bg-purple-500 hover:bg-purple-700 text-center  cursor-pointer  transition-all ease-in-out" >
                <p>  Edit</p>
              </button>
              <button className="py-2 px-10 rounded-md text-[#fff] bg-red-500 hover:bg-red-600 text-center  cursor-pointer  transition-all ease-in-out" >
                <p>  Delete</p>
              </button>
            </div>
          </div>
        ))}
        <button className="py-2 px-10 w-full m rounded-md text-[#fff] bg-green-500 hover:bg-green-600 text-center  cursor-pointer  transition-all ease-in-out" >
        <Link href="../tracking/new"><p>Create New</p></Link>
        </button>
      </div>
    </Layout>
  );
}

export default Tracking;
