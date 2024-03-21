// Importing necessary components and libraries
import Layout from "../../components/Layout";
import { useState } from "react";
import axios from "axios";
import { useSession } from 'next-auth/react';


// Component definition
export default function Updates({
    _id,
    updatePriority: existingPriority,
    updateName: existingName,
    updateDescription: existingDescription,
    updateVotes: existingVotes,
    updateStatus: exitstingStatus,
}) {
    // Using session hook
    const { data: session } = useSession();

    // State to manage form data
    const [formData, setFormData] = useState({
        userEmail: session?.user?.email || '',
        updatePriority: existingPriority,
        updateName: existingName,
        updateDescription: existingDescription,
        updateVotes: existingVotes,
        updateStatus: exitstingStatus,
    });

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Ensure that userEmail is properly set
            formData.userEmail = session?.user?.email;

            // Send the request with the updated formData
            const response = await axios.post("/api/updates", formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'user-email': session?.user?.email
                }
            });
           
            console.log("Equipment data submitted successfully:", response.data);
        } catch (error) {
            console.error('Error submitting equipment data:', error);
        }
    };

    // Rendering the component
    return (
        <Layout>
            <div className="w-full flex items-center justify-center absolute top-0">
         
            </div>
            <div className="flex flex-col gap-5 justify-start min-h-screen lg:w-1/2 w-full">

                <div className="flex flex-col items-center justify-center w-full text-center text-purple-500 border-b border-purple-700 py-3">
                    <h3 className="uppercase font-bold w-full">Add New Update</h3>
                    <p className="font-normal w-full">
                        This page is for creating new updates, and only admins can do so.
                        Vote on updates based on priority. If you have a suggestion, feel free to fill out the form below.
                    </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            <h4 className="text-purple-700 font-medium mb-2">Update Priority</h4>
                            <p className="bg-purple-100 mb-2 px-3 py-1 uppercase text-purple-400 rounded-md">This field is required !</p>
                            <select name="updatePriority" onChange={handleChange} value={formData.updatePriority} className="w-full py-3 px-3 text-purple-700 bg-purple-200 rounded-md ">
                                <option value="">Select Type</option>
                                <option value="High Priority">High Priority</option>
                                <option value="Medium Priority">Medium Priority</option>
                                <option value="Low Priority">Low Priority</option>
                                <option value="No Priority">No Priority</option>
                            </select>
                            
                        </label>
                        <label>
                            <h4 className="text-purple-700 font-medium mb-2">Update Status</h4>
                            <p className="bg-purple-100 mb-2 px-3 py-1 uppercase text-purple-400 rounded-md">This field is required !</p>
                            <select name="updateStatus" onChange={handleChange} value={formData.updatePriority} className="w-full py-3 px-3 text-purple-700 bg-purple-200 rounded-md ">
                                <option value="">Select Type</option>
                                <option value="HighPriority">Update Made</option>
                                <option value="MediumPriority">Working on Update</option>
                                <option value="LowPriority">On Hold</option>
                            </select>

                        </label>
                        <label>
                            <h4 className="text-purple-700 font-medium mb-2">Update Name</h4>
                            <input className="bg-transparent" name="updateName" onChange={handleChange} type="text" placeholder="Enter the name of the update." />
                        </label>
                        <label>
                            <h4 className="text-purple-700 font-medium mb-2">Update Description</h4>
                            <input className="bg-transparent" name="updateDescription" onChange={handleChange} type="text" placeholder="Enter the description of the update." />
                        </label>
                        <label>
                            <h4 className="text-purple-700 font-medium mb-2">Update Creator</h4>
                            <input className="bg-transparent" name="updateCreator" onChange={handleChange} type="text" placeholder="Enter the name of the update creator." />
                        </label>
                    </div>
                    <button type="submit" className="w-full mt-5 py-2 px-3 rounded-md bg-purple-500 hover:bg-purple-700 text-center cursor-pointer transition-all ease-in-out">
                        <p className="text-white uppercase font-bold">Submit</p>
                    </button>
                </form>
            </div>
        </Layout>
    );
}
