import StatsBox from "../../components/Box/StatsBox";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col w-full h-full items-center justify-center">
        <Header />
        <div className="w-full h-full flex flex-col items-center justify-center">
          {/* <StatsBox /> */}
          <div className='flex items-center justify-center flex-col w-full'>
            <h3 className='uppercase font-bold text-purple-700 mb-10 text-center'>Welcome to the PE Tracker</h3>
            <div className='w-full flex flex-col items-center justify-center bg-purple-200 px-3 py-3 rounded-md text-purple-500 '>
              <h4 className="font-bold">Built by Few-Valuable-6094</h4>
              <h5 className="text-center w-full">I hope this will be useful to you on your journey of PE. This was built as a side project for tracking my PE progress, so it`s still a bit rough around the edges. <br /> The app is currently in an early version, but there will be updates in the coming months based on user requests. My goal is to create something that all of us can benefit from.</h5>
              <h5 className="text-center w-full">Also, privacy is a priority to me so data is encrypted using JWT encryption and data is stored using MongoDB.</h5>
              <p className="text-center w-full">Feel free to message me on Reddit at Few-Valuable-6094 <br/> or <br/> Email : xzsplit69@gmail.com</p>
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
      </div>
    </Layout>
  );
}
