// importing layout
import Layout from '../../components/Layout'

export default function Faq() {
    return (
        <Layout>
            <div className="flex flex-col gap-5 justify-start min-h-screen lg:w-1/2 w-full">
            <div className="flex flex-col items-center justify-center w-full text-center text-purple-700 border-b border-purple-700 py-3 ">
                 <h3 className="uppercase font-bold w-full">How to use the app ?</h3>
            </div>
            <div className="text-purple-500 text-center mb-10 mt-10">
                <h3 className="text-purple-700 font-semibold uppercase mb-5">
                    How to start: 
                </h3>
               <div className="flex flex-col gap-5">
                    <h4 className="text-purple-500">
                  First add the equipment/tools that you have, <span className="text-purple-400 font-light"> (if there are any missing, contact me.)</span> <br/>
                  Add as many as you want, there is no limit.
                </h4>
                      <h4 className="text-purple-500">
                 Second you can either take measurements of your penis or you can track the exercise/exercises you are doing or have done. There is no order, both exercises and measurements can be edited as many times you want and are indentified by date.
                </h4>
                    </div>
                    
            </div>
                <div className="text-purple-500 text-center">
                    <h3 className="text-purple-700 font-semibold uppercase mb-5">
                      About the app
                    </h3>
                    <div className="flex flex-col gap-5 ">
                        <h4 className="text-purple-500 border-b py-5 ">
                           So far the app is free and will be free for some time until I am required to pay based on the user data. And in the future for storage if you guys want image storage for progress or things of that nature.
                        </h4>
                           <h4 className="text-purple-500 border-b py-5">
                           <span className="font-bold uppercase"> Plans on expanding this ? YES</span> <br/>
                          There are updates planned, first one is to add stats based on data that the user has provided, due to the lack of organic data  <span className="text-purple-400 font-light"> (i need more test cases and data )</span>, if i can call it that. <br/>
                          Next step is based on user input to transform this into a Mobile App, but for that i will need support from you guys, i am not really familiar with mobile development.
                        </h4>
                    
                    </div>

                </div>
                <div className="text-purple-500 text-center">
                    <h3 className="text-purple-700 font-semibold uppercase mb-5">
                        About the app
                    </h3>
                    <div className="flex flex-col gap-5 ">
                        <h4 className="text-purple-500 border-b py-5 ">
                            So far the app is free and will be free for some time until I am required to pay based on the user data. And in the future for storage if you guys want image storage for progress or things of that nature.
                        </h4>
                        
                    </div>

                </div>
            </div>
        </Layout>
    )
}