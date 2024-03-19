import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../../../components/Layout";
import TrackingForm from "../../../../components/Forms/TrackingForm";
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
                const response = await axios.get(`/api/tracking?id=${id}`, {
                    headers: {
                        'User-Email': session?.user?.email
                    }
                });
                setTrackingData(response?.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching tracking data:', error);
                setLoading(true);
            }
        };

        if (id) {
            fetchTrackingData();
        }
    }, [session?.user?.email, id]);

    return (
        <Layout>
            <div className="">
                <div className='w-full text-center text-purple-500 uppercase font-bold border-b border-purple-700 py-3'>
                    <h3>Edit your data</h3>
                </div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <TrackingForm {...trackingData} />
                )}
            </div>
        </Layout>
    );
}
