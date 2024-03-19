import StatsBox from "../../components/Box/StatsBox";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col w-full h-full items-center justify-center">
        <Header />
        <div className="w-full h-full flex items-center justify-center">
          {/* <StatsBox /> */}
          <div className='flex items-center justify-center flex-col'>
                <h3 className='uppercase font-bold text-purple-500 mb-10'></h3>
                <div className='w-full flex flex-col items-center justify-center bg-purple-200 px-3 py-3 rounded-md text-purple-700 '>
                    <h4 className="font-bold">Built by Few-Valuable-6094</h4>
              <h5 className="text-center w-1/2">I hope this will be useful to you on your journey of PE. This was built as a side project for tracking my PE progress, so it`s still a bit rough around the edges. <br/> The app is currently in an early version, but there will be updates in the coming months based on user requests. My goal is to create something that all of us can benefit from.</h5>
              <p className="text-center w-1/2"> Feel free to message me on Reddit <br/>  or <br/> Email : dev.lazarescu.alexandru@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
    </Layout>
  );
}
