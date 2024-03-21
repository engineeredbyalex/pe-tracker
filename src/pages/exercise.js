import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function ExercisePage() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(null);
  const [exerciseData, setExerciseData] = useState([]);

  const fetchExerciseData = async () => {
    try {
      const response = await axios.get("/api/exercise", {
        headers: {
          'Content-Type': 'application/json',
          'User-Email': session?.user?.email
        }
      });
      setExerciseData(response?.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tracking data:', error);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchExerciseData();
  }, [session?.user?.email]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/exercise?id=${id}`);
      console.log("Exercise deleted successfully:", id);
      // Refetch exercise data after successful deletion
      fetchExerciseData();
    } catch (error) {
      console.error('Error deleting exercise:', error);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col gap-5 justify-start min-h-screen lg:w-1/2 w-full">
        <div className="flex flex-col items-center justify-center w-full text-center text-purple-500 border-b border-purple-700 py-3">
          <h3 className="uppercase font-bold w-full">Input the Exercise</h3>
          <p className="font-normal w-full">
            Here you can add all of the exercises you have done. Please add the exercise you have done to keep track of your progress.
          </p>
        </div>
        <button className="py-2 px-10 w-full  rounded-md text-[#fff] bg-green-500 hover:bg-green-600 text-center cursor-pointer transition-all ease-in-out">
          <Link href="../exercise/new">
            <p>Create New</p>
          </Link>
        </button>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {exerciseData.map((data, index) => (
              <div key={data._id}>
                <p className='text-purple-700 text-center mb-2'>Exercise : {data.type.toUpperCase()}</p>
                <p className='text-purple-700 text-center mb-2'>Date: {(new Date(data.createdAt)).toLocaleString()}</p>
                <div className='flex flex-col gap-5 w-full'>
                  <button className="w-full py-2 px-10 rounded-md text-[#fff] bg-purple-500 hover:bg-purple-700 text-center cursor-pointer transition-all ease-in-out">
                    <Link href={'/exercise/edit/' + data._id}>
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
