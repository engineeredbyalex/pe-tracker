// importing Layout
import Layout from '../Layout';
// importing useState
import { useState } from 'react';
// importing Axios
import axios from "axios";
// importing session
import { useSession } from 'next-auth/react';

function TrackingForm() {
    const { data: session, status } = useSession()
    const [formData, setFormData] = useState({
        userId:session.user._id,
        flacidLenght: "",
        flacidGirth: "",
        flacidBPLenght: "",
        erectLenght: "",
        erectGirth: "",
        erectBPLenght: "",
        postExtendedFlacidLenght: "",
        postExtendederectBPLenght: "",
        postExtendedErectLenght: "",
        postPumpingErectLenght: "",
        postPumpingErectGirth: "",
        postPumpingFlacidLenght: "",
        postPumpingFlacidGirth: "",
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
        console.log("Form data:", formData);

        try {
            const dataRegister = await axios.post("/api/tracking", formData);
            console.log("Data response:", dataRegister);
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (

            <div className='flex items-center justify-center flex-col'>
                <h3 className='uppercase font-bold text-purple-500 mb-10'>Input new Data</h3>
                <div className='w-full flex items-center justify-center bg-purple-200 px-3 py-3 rounded-md text-purple-700 font-bold'>
                    <form onSubmit={handleSubmit}>
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
                    </form>
                </div>
            </div>
    
    );
}

export default TrackingForm;
