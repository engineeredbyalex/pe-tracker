import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from 'next-auth/react';

export default function EquipmentPage() {
  const { data: session } = useSession();
  const [equipment, setEquipment] = useState([]);

  const [formData, setFormData] = useState({
    userEmail: session?.user?.email || '',
    type: '',
    brand: '',
    name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      formData.userEmail = session?.user?.email;
      const response = await axios.post("/api/equipment", formData, {
        headers: {
          'Content-Type': 'application/json',
          'user-email': session?.user?.email
        }
      });
      console.log("Equipment data submitted successfully:", response.data);
      // Refetch equipment data after successful submission
      fetchEquipmentData();
    } catch (error) {
      console.error('Error submitting equipment data:', error);
    }
  };

  const fetchEquipmentData = async () => {
    try {
      const response = await axios.get('/api/equipment', {
        headers: {
          'Content-Type': 'application/json',
          'User-Email': session?.user?.email
        }
      })
      setEquipment(response?.data)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchEquipmentData();
  }, [session?.user?.email]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/equipment?id=${id}`);
      // Refetch equipment data after successful deletion
      fetchEquipmentData();
    } catch (error) {
      console.error('Error deleting equipment:', error);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col gap-5 justify-start h-auto lg:w-1/2 w-full">
          <div className="flex flex-col items-center justify-center w-full text-center text-purple-500 border-b border-purple-700 py-3">
            <h3 className="uppercase font-bold w-full">Add your equipment</h3>
            <p className="font-normal w-full">
              Please add your equipment, so you can use it for the exercise tab,
              e.g., you do 5 mins of pumping at 5hg, so you register the 5 mins
              and the pressure and use the equipment registered here.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                <h4 className="text-purple-700 font-medium mb-2">Type</h4>
                <p className="bg-purple-100 mb-2 px-3 py-1 uppercase text-purple-400 rounded-md">This field is required !</p>
                <select name="type" onChange={handleChange} value={formData.type} className="w-full py-3 px-3 text-purple-700 bg-purple-200 rounded-md ">
                  <option value="">Select type</option>
                  <option value="pump">Pump</option>
                  <option value="extender">Extender</option>
                  <option value="extender">Silicone rings</option>
                  <option value="extender">Hard clamping</option>
                  {/* Add more options as needed */}
                </select>
              </label>
              <p className="bg-purple-100 mb-2 px-3 py-1 uppercase text-purple-400 rounded-md mt-5">If there is anything missing or you would like to add to this list, feel free to contact me to add it.</p>
              <label>
                <h4 className="text-purple-700 font-medium mb-2">Brand</h4>
                <input className="bg-transparent" name="brand" onChange={handleChange} type="text" placeholder="Enter the brand of your equipment." />
              </label>
              <label>
                <h4 className="text-purple-700 font-medium mb-2">Name of your equipment</h4>
                <input className="bg-transparent" name="name" onChange={handleChange} type="text" placeholder="Enter the name of your equipment." />
              </label>
            </div>
            <button type="submit" className="w-full mt-5 py-2 px-3 rounded-md bg-purple-500 hover:bg-purple-700 text-center cursor-pointer transition-all ease-in-out">
              <p className="text-white uppercase font-bold">Submit</p>
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-5 justify-start h-auto lg:w-1/2 w-full">
          <div className="flex flex-col items-center justify-center w-full text-center text-purple-500 border-b border-purple-700 py-3">
            <h3 className="uppercase font-bold w-full">Your current equipment</h3>
            <p className="font-normal w-full">
              Here you have listed all of your equipment, from here you can delete it.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full text-center text-purple-500  py-3">
            {equipment.map((data, index) => (
              <div className="bg-purple-200 px-3 py-2 mb-5 rounded-lg w-full" key={index}>
                <h5>Type: {data?.type}</h5>
                <h5>Brand: {data?.brand}</h5>
                <h5>Name: {data?.name}</h5>
                <button onClick={() => handleDelete(data._id)} className="mt-5 w-full py-2 px-10 rounded-md text-[#fff] bg-red-500 hover:bg-red-600 text-center cursor-pointer transition-all ease-in-out">
                  <p>Delete</p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
