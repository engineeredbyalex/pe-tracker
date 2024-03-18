// importing layout
import Layout from "../../../../components/Layout";
// importing useRouter
import { useRouter } from "next/router";
// importing useEffect and useState
import { useEffect, useState } from "react";
// importing axios
import axios from "axios";

export default function DeleteTrackingDataPage() {
    const router = useRouter()
    const [trackingData, setTrackingData] = useState();
    const { id } = router.query

    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/api/tracking?id=' + id).then(response => {
            setTrackingData(response.data);
        });
    }, [id])
    function goBack() {
        router.push('/tracking');
    }
    async function deleteTrackingData() {
        await axios.delete('/api/tracking?id=' + id);
        goBack();
    }
    return (
        <Layout>
            <div className="flex flex-col w-full h-full items-center justify-center ">
                <h5 className="text-center uppercase grey_text">Do you really want to delete this entry ?
                </h5>
                <div className="flex gap-2 justify-center">
                    <button
                        onClick={deleteTrackingData}
                        className="py-2 px-10 rounded-md text-[#fff] bg-green-500 hover:bg-green-600 text-center cursor-pointer transition-all ease-in-out">Yes</button>
                    <button className="py-2 px-10 rounded-md text-[#fff] bg-red-500 hover:bg-red-600 text-center cursor-pointer transition-all ease-in-out"
                        onClick={goBack}>
                        NO
                    </button>
                </div>
            </div>
        </Layout>
    )
}