import Layout from "../../components/Layout";
import { useEffect, useState } from 'react';
import axios from "axios";
import { useSession } from 'next-auth/react';
import UnderDevelopment from "../../components/UnderDevelopment"

export default function StatsPage() {
    const [exerciseData, setExerciseData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { data: session } = useSession();

    useEffect(() => {
        const fetchExerciseData = async () => {
            try {
                const response = await axios.get("/api/exercise", {
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Email': session?.user?.email
                    }
                });
                setExerciseData(response?.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching exercise data:', error);
                setLoading(true);
            }
        }

        if (session?.user?.email) {
            fetchExerciseData();
        }
    }, [session?.user?.email]);

    return (
        <Layout>
            {/* <div className="flex flex-col w-full lg:w-1/2">
                   <h3 className="uppercase font-bold w-full">Exercise Data</h3>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                        <div className="flex flex-col items-center justify-center w-full text-center text-purple-500 border-b border-purple-700 py-3">
                        {exerciseData.map((exercise, index) => (
                            <div key={index} className="mb-4 border rounded py-3 px-5">
                                <h3 className="text-lg font-semibold mb-2">Exercise {index + 1}</h3>
                                <p><strong>Type:</strong> {exercise.type}</p>
                                <p><strong>Duration:</strong> {exercise.duration} {exercise.durationUnit}</p>
                                <p><strong>Weight / Pressure:</strong> {exercise.sets}</p>
                                <p><strong>Unit:</strong> {exercise.unit}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div> */}
            <UnderDevelopment/>
        </Layout>
    )
}
