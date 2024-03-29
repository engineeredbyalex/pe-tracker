//  importing
 import Layout from "../../components/Layout";
// importing
 import { useState } from "react";
// importing axios
import axios from "axios";
// importing useSession
import { useSession } from 'next-auth/react';

export default function EquipmentPage() {
  const { data: session } = useSession();

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
      // Ensure that userEmail is properly set
      formData.userEmail = session?.user?.email;

      // Send the request with the updated formData
      const response = await axios.post("/api/equipment", formData, {
        headers: {
          'Content-Type': 'application/json',
          'user-email': session?.user?.email  // Ensure that user-email header is included
        }
      });

      console.log("Equipment data submitted successfully:", response.data);
    } catch (error) {
      console.error('Error submitting equipment data:', error);
    }
  };


  return (
    <Layout>
      <div className="flex flex-col gap-5 justify-start min-h-screen lg:w-1/2 w-full">
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
              <select name="type" onChange={handleChange} value={formData.type} className="w-full py-3 px-3 text-purple-700 bg-purple-200 rounded-md ">
                <option value="">Select type</option>
                <option value="pump">Pump</option>
                <option value="extender">Extender</option>
                <option value="extender">Silicone rings</option>
                <option value="extender">Hard clamping</option>
                {/* Add more options as needed */}
              </select>
            </label>
              <p className="text-purple-500">If there is anything missing, feel free to contact me to add it </p>
            <label>
              <h4 className="text-purple-700 font-medium mb-2">Brand</h4>
              <input name="brand" onChange={handleChange} type="text" placeholder="Enter the brand of your equipment." />
            </label>
            <label>
              <h4 className="text-purple-700 font-medium mb-2">Name of your equipment</h4>
              <input name="name" onChange={handleChange} type="text" placeholder="Enter the name of your equipment." />
            </label>
          </div>
          <button type="submit" className="w-full mt-5 py-2 px-3 rounded-md bg-purple-500 hover:bg-purple-700 text-center cursor-pointer transition-all ease-in-out">
            <p className="text-white uppercase font-bold">Submit</p>
          </button>
        </form>
      </div>
    </Layout>
  );
}
