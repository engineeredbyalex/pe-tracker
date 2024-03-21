import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Link from "next/link";
import axios from "axios";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";

export default function Home() {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await axios.get("/api/updates");
        // Update the state with the fetched data
        setUpdates(response.data);
      } catch (error) {
       
      }
    };
    fetchUpdates();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col w-full h-full items-center justify-center">
        <Header />
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className='flex items-center justify-center flex-col w-full'>
            <h3 className='uppercase font-bold text-purple-700 mb-10 text-center'>Welcome to the PE Tracker</h3>
            <div className='w-full flex flex-col items-center justify-center bg-purple-200 px-3 py-3 rounded-md text-purple-500 '>
              <h4 className="font-bold">Built by Few-Valuable-6094</h4>
              <h5 className="text-center w-full">I hope this will be useful to you on your journey of PE. This was built as a side project for tracking my PE progress, so it's still a bit rough around the edges. <br /> The app is currently in an early version, but there will be updates in the coming months based on user requests. My goal is to create something that all of us can benefit from.</h5>
              <h5 className="text-center w-full">Also, privacy is a priority to me so data is encrypted and stored in MongoDB.</h5>
              <p className="text-center w-full">Feel free to message me on Reddit at Few-Valuable-6094 <br /> or <br /> Email : xzsplit69@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-row w-full gap-5">
            <button type="submit" className="w-full mt-5 py-2 px-3 rounded-md bg-purple-500 hover:bg-purple-700 text-center cursor-pointer transition-all ease-in-out">
              <Link href='/faq'>
                <p className="text-white uppercase font-bold">FAQ</p>
              </Link>
            </button>
            <button type="submit" className="w-full mt-5 py-2 px-3 rounded-md bg-purple-500 hover:bg-purple-700 text-center cursor-pointer transition-all ease-in-out">
              <Link href='/policy'>
                <p className="text-white uppercase font-bold">Privacy Policy</p>
              </Link>
            </button>
          </div>
        </div>
        <div className="mt-10">
          <h4 className='uppercase font-bold text-purple-700 mb-10 text-center'>Updates</h4>
          {updates.map((data, index) => (
            <div className="bg-purple-200 px-3 py-2 mb-5 rounded-lg w-full" key={index}>
              <div>
                <p className="text-purple-500 uppercase">Priority level :</p>
                <h3 className="text-purple-500 uppercase">{data.updatePriority}</h3>
              </div>
              <div>
                <p className="text-purple-500 uppercase">Update name :</p>
                <h4 className="text-purple-500 ">{data.updateName}</h4>
              </div>
              <div>
                <p className="text-purple-500 uppercase">Update details</p>
                <h5 className="text-purple-500">{data.updateDescription}</h5>
              </div>
              <div>
                <p className="text-purple-500 uppercase">Update created by:</p>
                <p className="text-purple-500">{data.updateCreator}</p>
              </div>
              {/* <div className="flex flex-row">
                <div className="w-full flex flex-row gap-5 justify-start text-purple-500">
               <h5>Vote count</h5>
               <h5>0</h5>
                </div>
                <div className="w-full flex flex-row gap-5 justify-end">
                  <FaArrowAltCircleUp color="#595959" size={30} />
                  <FaArrowCircleDown color="#595959" size={30} />
                </div>
           </div> */}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
