// importing
import { useState } from 'react';
// importing
import axios from "axios";
// importing
import { useSession } from 'next-auth/react';
// importing
import { useRouter } from 'next/router';
// importing link 
import Link from 'next/link';
function TrackingForm(
    {
        _id,
        flacidLenght: existingflacidLenght,
        flacidGirth: existingflacidGirth,
        flacidBPLenght: existingflacidBPLenght,
        erectLenght: existingerectLenght,
        erectGirth: existingerectGirth,
        erectBPLenght: existingerectBPLenght,
        postExtendedFlacidLenght: existingpostExtendedFlacidLenght,
        postExtendederectBPLenght: existingpostExtendederectBPLenght,
        postExtendedErectLenght: existingpostExtendedErectLenght,
        postPumpingErectLenght: existingpostPumpingErectLenght,
        postPumpingErectGirth: existingpostPumpingErectGirth,
        postPumpingFlacidLenght: existingpostPumpingFlacidLenght,
        postPumpingFlacidGirth: existingpostPumpingFlacidGirth,
        stretchedBPFlacid: existingStretchedBPFlacid,
        erectionQuality: existingErectionQuality,
        bodyFat: existingBodyFat,
    }) {
    const { data: session } = useSession();
    const router = useRouter()
    const [message, setMessage] = useState(false)

    const [formData, setFormData] = useState({
        userEmail: session.user?.email,
        flacidLenght: existingflacidLenght || "",
        flacidGirth: existingflacidGirth || "",
        flacidBPLenght: existingflacidBPLenght || "",
        erectLenght: existingerectLenght || "",
        erectGirth: existingerectGirth || "",
        erectBPLenght: existingerectBPLenght || "",
        postExtendedFlacidLenght: existingpostExtendedFlacidLenght || "",
        postExtendederectBPLenght: existingpostExtendederectBPLenght || "",
        postExtendedErectLenght: existingpostExtendedErectLenght || "",
        postPumpingErectLenght: existingpostPumpingErectLenght || "",
        postPumpingErectGirth: existingpostPumpingErectGirth || "",
        postPumpingFlacidLenght: existingpostPumpingFlacidLenght || "",
        postPumpingFlacidGirth: existingpostPumpingFlacidGirth || "",
        stretchedBPFlacid: existingStretchedBPFlacid || "",
        erectionQuality: existingErectionQuality || "",
        bodyFat: existingBodyFat || "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (_id) {
                await axios.put("/api/tracking", { ...formData, _id });
              
                setMessage(!message)
            }
            else {
                await axios.post("/api/tracking", formData);
        
                setMessage(!message)
            }
        } catch (error) {
            console.error('Error submitting data:', error);
            setMessage(message)
        }
    };
    return (

        <div className='flex items-center justify-center flex-col'>
            <h3 className='uppercase font-bold text-purple-500 mb-10'>Data Form</h3>
            <div className='w-full flex items-center justify-center bg-purple-200 px-3 py-3 rounded-md text-purple-700 font-bold'>
                <form onSubmit={handleSubmit}>
                    <label>
                        Body Fat:
                        <input
                            type="text"
                            name="bodyFat"
                            value={formData.bodyFat}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Erection Quality
                        <input
                            type="text"
                            name="erectionQuality"
                            value={formData.erectionQuality}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Flacid Length:
                        <input
                            type="text"
                            name="flacidLenght"
                            value={formData.flacidLenght}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Flacid Girth:
                        <input
                            type="text"
                            name="flacidGirth"
                            value={formData.flacidGirth}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Flacid BP Length:
                        <input
                            type="text"
                            name="flacidBPLenght"
                            value={formData.flacidBPLenght}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                       Stretched Flacid BP Length:
                        <input
                            type="text"
                            name="stretchedBPFlacid"
                            value={formData.stretchedBPFlacid}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Erect Length:
                        <input
                            type="text"
                            name="erectLenght"
                            value={formData.erectLenght}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Erect Girth:
                        <input
                            type="text"
                            name="erectGirth"
                            value={formData.erectGirth}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Erect BP Length:
                        <input
                            type="text"
                            name="erectBPLenght"
                            value={formData.erectBPLenght}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Post Extended Flacid Length:
                        <input
                            type="text"
                            name="postExtendedFlacidLenght"
                            value={formData.postExtendedFlacidLenght}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Post Extended Erect BP Length:
                        <input
                            type="text"
                            name="postExtendederectBPLenght"
                            value={formData.postExtendederectBPLenght}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Post Extended Erect Length:
                        <input
                            type="text"
                            name="postExtendedErectLenght"
                            value={formData.postExtendedErectLenght}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Post Pumping Erect Length:
                        <input
                            type="text"
                            name="postPumpingErectLenght"
                            value={formData.postPumpingErectLenght}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Post Pumping Erect Girth:
                        <input
                            type="text"
                            name="postPumpingErectGirth"
                            value={formData.postPumpingErectGirth}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Post Pumping Flacid Length:
                        <input
                            type="text"
                            name="postPumpingFlacidLenght"
                            value={formData.postPumpingFlacidLenght}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Post Pumping Flacid Girth:
                        <input
                            type="text"
                            name="postPumpingFlacidGirth"
                            value={formData.postPumpingFlacidGirth}
                            onChange={handleChange}
                        />
                    </label>
                    
                    <button type="submit" className="w-full mt-5 py-2 px-3 rounded-md bg-purple-500 hover:bg-purple-700 text-center  cursor-pointer  transition-all ease-in-out">
                        <p className="text-white uppercase font-bold">Submit</p>
                    </button>
                    {message ? (
                        <div>
                            <div className="w-full mt-5 py-2 px-3 rounded-md bg-green-500 hover:bg-green-600 text-center cursor-pointer transition-all ease-in-out">
                                <p className="text-white uppercase font-bold">
                                    Tracking data submitted successfully
                                </p>
                            </div>
                            <div className="w-full mt-5 py-2 px-3 rounded-md bg-black text-center cursor-pointer transition-all ease-in-out">
                                <Link href='/tracking'>
                                    <p className="text-white uppercase font-bold">
                                        Go Back
                                    </p>
                                </Link>
                            </div>
                        </div>

                    ) : (null)}
                </form>
            </div>
        </div>

    );
}

export default TrackingForm;
