import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

function RegisterForm() {
    const { data: status, session } = useSession();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const [toggle, setToggle] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true); // State to track if passwords match
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !email || !password || !confirmPassword || !toggle) {
            setError("All fields are necessary.");
            return;
        }

        if (password !== confirmPassword) {
            setPasswordMatch(false);
            return;
        }

        try {
            const resUserExists = await axios.post("/api/userExists", { email });

            if (resUserExists.data.user) {
                setError("User already exists.");
                return;
            }

            const resRegister = await axios.post("/api/register", { username, email, password });

            if (resRegister.status === 201) {
                const form = e.target;
                form.reset();
                router.push("/");
            } else {
                console.log("User registration failed.");
            }
        } catch (error) {
            console.log("Error during registration: ", error);
        }
    };

    if (status === "loading") {
        return null;
    }

    if (!session) {
        return (
            <div className="flex items-center justify-center h-screen w-full text-black">
                <div className="shadow-lg p-5 rounded-md bg-[#ffffff] min-w-[300px] min-h-[400px]">
                    <p className="text-purple-700 font-medium upp text-center border-b border-purple-500 py-2 my-5">Register to <span className="font-bold uppercase text-purple-500">🍆PP Tracker</span></p>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
                        <input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                        <input placeholder="Username" type="text" onChange={(e) => setUsername(e.target.value)} />
                        <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                        <input placeholder="Confirm Password" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
                        <div className="w-full flex flex-col gap-3">
                            <div className="flex items-center justify-center flex-row gap-1">
                                <p>Check the box if you read the <Link href="/policy"><span className="text-purple-500">Privacy Policy</span></Link>.</p>
                                <input className="w-[1.5rem] h-[1.5rem]" type="checkbox" onChange={() => setToggle(!toggle)} />
                            </div>
                            {!passwordMatch && <p className="text-red-500">Passwords do not match.</p>}
                            <button type="submit" className={`w-full ${toggle && passwordMatch ? 'bg-purple-500 hover:bg-purple-700' : 'bg-purple-200 cursor-not-allowed'} py-2 px-3 rounded-md text-center text-white uppercase font-bold transition-all ease-in-out`}>
                                Register
                            </button>
                        </div>
                        {error && (
                            <div className="bg-red-500 text-white text-sm py-2 px-3 rounded-md mt-2 w-full text-center">
                                <p> {error}</p>
                            </div>
                        )}
                        <Link href={"/"}>
                            <p className="text-sm mt-3 text-right hover:text-purple-500 transition-all ease-in-out">Already have an account ? <span className="underline text-purple-500">Login</span></p>
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default RegisterForm;
