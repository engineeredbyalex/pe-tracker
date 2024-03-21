// importing useState and useEffect
import { useEffect, useState } from "react";
// importing axios
import axios from "axios";
// importing useSession
import { useSession } from 'next-auth/react';
// importing link
import Link from "next/link";

export default function ExerciseForm() {
  const { data: session } = useSession();
  const [deviceData, setDeviceData] = useState([])
  const [message,setMessage] = useState(false)

  useEffect(() => {
    const fetchDevice = async () => {
try{
  const response = await axios.get('/api/equipment', {
    headers :{
      'Content-Type': 'application/json',
       'User-Email': session?.user?.email
    }
  })
  setDeviceData(response?.data)
}
catch (error) {
  console.log(error)
}
    }
    fetchDevice()
    }, [session?.user?.email])
  
  const [formData, setFormData] = useState({
    userEmail: session?.user?.email || '',
    type: '',
    duration: '',
    durationUnit: '',
    sets: '',
    unit: '',
    device : ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/exercise", formData, {
        headers: {
          'Content-Type': 'application/json',
          'user-email': session?.user?.email
        },
      });
      console.log("Exercise data submitted successfully:", response.data);
      
      setMessage(!message)
     
    } catch (error) {
      console.error('Error submitting exercise data:', error);
      setMessage(!message)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="flex flex-col gap-5 justify-start min-h-screen w-full">
      <div className="flex flex-col items-center justify-center w-full text-center text-purple-500 border-b border-purple-700 py-3">
        <h3 className="uppercase font-bold w-full">Input the Exercise</h3>
        <p className="font-normal w-full">
          Please add the exercise you have done to keep track of your progress.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <h4 className="text-purple-700 font-medium mb-2">Type</h4>
            <select name="type" onChange={handleChange} value={formData.type} className="w-full py-3 px-3 text-purple-700 bg-purple-200 rounded-md">
              <option value="">Select type</option>
              <option value="manuals">Manuals</option>
              <option value="extending">Extending</option>
              <option value="pumping">Pumping</option>
              <option value="stretching">Stretching</option>
              <option value="warmingUp">Warming up</option>
              <option value="clamping">Clamping</option>
            </select>
          </label>
          <label>
            <h4 className="text-purple-700 font-medium mb-2">Device</h4>
            <select name="device" onChange={handleChange} value={formData.device} className="w-full py-3 px-3 text-purple-700 bg-purple-200 rounded-md">
               <option  value="none">None </option>
             {deviceData.map(device => (
               <option key={device._id} value={device.name}>{device.type} - {device.name} </option>
               
             ))}
            </select>
          </label>
          <div className="flex lg:flex-col flex-row w-full items-center lg:justify-center justify-between">
            <div className="lg:w-full w-1/2">
              <h4 className="text-purple-700 font-medium mb-2">Duration</h4>
              <input name="duration" onChange={handleChange} type="text" placeholder="Enter the Duration of the exercise." />
            </div>
            <div className="lg:w-full w-1/2">
              <h4 className="text-purple-700 font-medium mb-2">Duration Unit</h4>
              <select name="durationUnit" onChange={handleChange} value={formData.durationUnit} className="w-full py-3 px-3 text-purple-700 bg-purple-200 rounded-md">
                <option value="">Select unit</option>
                <option value="seconds">Seconds</option>
                <option value="minutes">Minutes</option>
                <option value="hours">Hours</option>
              </select>
            </div>
          </div>
          <label>
            <h4 className="text-purple-700 font-medium mb-2">Weight / Pressure </h4>
            <input name="sets" onChange={handleChange} type="number" placeholder="Enter the number of sets." />
          </label>
          <label>
            <h4 className="text-purple-700 font-medium mb-2">Unit</h4>
            <select name="unit" onChange={handleChange} value={formData.unit} className="w-full py-3 px-3 text-purple-700 bg-purple-200 rounded-md">
              <option value="">Select unit</option>
              <option value="hg">hg</option>
              <option value="kg">Kg</option>
              <option value="g">g</option>
              <option value="lbs">lbs</option>
            </select>
          </label>
        </div>
        <button type="submit" className="w-full mt-5 py-2 px-3 rounded-md bg-purple-500 hover:bg-purple-700 text-center cursor-pointer transition-all ease-in-out">
          <p className="text-white uppercase font-bold">Submit</p>
        </button>
         {message ?  (
           <div>
            <div className="w-full mt-5 py-2 px-3 rounded-md bg-green-500 hover:bg-green-600 text-center cursor-pointer transition-all ease-in-out">
              <p className="text-white uppercase font-bold">
                Exercise data submitted successfully
              </p>
            </div>
            <div className="w-full mt-5 py-2 px-3 rounded-md bg-black text-center cursor-pointer transition-all ease-in-out">
             <Link href='/exercise'>
              <p className="text-white uppercase font-bold">
                Go Back 
                </p>
                </Link>
            </div>
           </div>
          
         ) :(null)}
      </form>
    </div>
  );
}
