import Layout from '../../components/Layout';

export default function Faq() {
    return (
        <Layout>
            <div className="flex flex-col gap-5 justify-start min-h-screen lg:w-1/2 w-full">
                <div className="flex flex-col items-center justify-center w-full text-center text-purple-700 border-b border-purple-700 py-3 ">
                    <h3 className="uppercase font-bold w-full">How to use the app?</h3>
                </div>
                <div className="text-purple-500 text-center mb-10 mt-10">
                    <h3 className="text-purple-700 font-semibold uppercase mb-5">
                        How to start:
                    </h3>
                    <div className="flex flex-col gap-5">
                        <h4 className="text-purple-500">
                            First, add the equipment/tools that you have. If there are any missing, contact me. <span className="text-purple-400 font-light">(There is currently no limit to the number of equipment you can add.)</span>
                        </h4>
                        <h4 className="text-purple-500">
                            Second, you can either take measurements of your penis or track the exercises you are doing or have done. There is no specific order; both exercises and measurements can be edited as many times as you want and are identified by date.
                        </h4>
                    </div>
                </div>
                <div className="text-purple-500 text-center">
                    <h3 className="text-purple-700 font-semibold uppercase mb-5">
                        About the app
                    </h3>
                    <div className="flex flex-col gap-5 ">
                        <h4 className="text-purple-500 border-b py-5 ">
                            The app is currently free and will remain free for some time. However, in the future, there may be a requirement to pay based on user data and for storage if users want image storage for progress or other purposes.
                        </h4>
                    </div>
                </div>
                <div className="text-purple-500 text-center">
                    <h3 className="text-purple-700 font-semibold uppercase mb-5">
                        Updates
                    </h3>
                    <div className="flex flex-col gap-5 ">
                        <h4 className="text-purple-500 border-b py-5 ">
                            The first update planned for this week is a feature where users can upvote or downvote the importance of the updates and maybe have the option to suggest upcoming updates.
                            <br />
                            The second update will include the option to see in-depth stats regarding size, exercise, create routines, and maybe lists with other things related to PE, supplements, etc.
                            <br />
                            The third update will possibly include the option to use other users routines.
                        </h4>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
