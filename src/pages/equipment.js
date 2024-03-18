// importing layout
import Layout from "../../components/Layout";
// importing useState and useEffect
import { useEffect,useState } from "react";
// importing axios
import axios from "axios";
// importing model
import { Equipment } from "../../models/Equipment";

export default function EquipmentPage() {
  const [equipment, setEquipment] = useState('')
  const [brand, setBrand] = useState('')
  const [name, setName] = useState('')
  
  return (
    <Layout>
      <div className="flex flex-col gap-5 justify-start min-h-screen">
        <div className="w-full text-center text-purple-500 border-b border-purple-700 py-3">
          <h3 className="uppercase font-bold">Add your equipment</h3>
          <p className="font-normal">
            Please add your equipment, so you can use it for the exercise tab,
            ex: you do 5 mins of pumping at 5hg, so you register the 5 mins
            and the pressure and use the equipment registered here.
          </p>
        </div>
        <div>
          <label>
            <h4 className="text-purple-700 font-medium mb-2">Type</h4>
            <select onChange={(ev) => setEquipment(ev.target.value)}   className="w-full py-3 px-3 text-purple-700 bg-purple-200 rounded-md " value={setEquipment}>
              <option value="">Select type</option>
              <option value="pump">Pump</option>
              <option value="extender">Extender</option>
            </select>
          </label>
          <label>
            <h4 className="text-purple-700 font-medium mb-2">Brand</h4>
            <input onChange={(ev)=> setName(ev.target.value)} type="text" placeholder="Enter the brand of your equipment." />
          </label>
          <label>
            <h4 className="text-purple-700 font-medium mb-2">Name of your equipment </h4>
            <input onChange={(ev) => setName(ev.target.value)} type="text" placeholder="Enter the Name of your equipment." />
          </label>
        </div>
        <button type="submit" className="w-full mt-5 py-2 px-3 rounded-md bg-purple-500 hover:bg-purple-700 text-center  cursor-pointer  transition-all ease-in-out">
          <p className="text-white uppercase font-bold">Submit</p>
        </button>
      </div>
    </Layout>
  );
}
