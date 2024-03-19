// importing axios
import axios from "axios"
// importing layout
import Layout from "../../../../components/Layout"
// importing useState and useEffect
import { useState, useEffect } from "react"
// importing userouter
import { useRouter } from "next/router";
// importing trackingForm
import TrackingForm from "../../../../components/Forms/TrackingForm";
// importing useSession
import { useSession } from "next-auth/react";

export default function EditTrackingData() {
    const [trackingData, setTrackingData] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { data: session } = useSession();
    const { id } = router.query; 
    
    useEffect(() => {
        const fetchTrackingData = async () => {
            try {
                const response = await axios.get('/api/tracking', {
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Email': session?.user?.email
                    }
                });
                setTrackingData(response?.data);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching tracking data:', error);
                setLoading(true)
            }
        };


        fetchTrackingData();
    }, [session?.user?.email]);
    return (
        <Layout>
            <div className="">
                <div className='w-full text-center text-purple-500 uppercase font-bold border-b border-purple-700 py-3'>
                    <h3>Edit your data</h3>
                </div>
                {loading && (
                    <p>Loading...</p>
                )}
                {trackingData && (
                    <TrackingForm {...trackingData} />
                )}
           </div>
        </Layout>
    )
}