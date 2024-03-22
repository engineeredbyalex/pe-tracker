// importing state
import { useState } from "react"
// importing signin and useSession
import { signIn, useSession } from "next-auth/react"
// importing link
import Link from "next/link"
// importing router
import { useRouter } from "next/router"

export default function  LoginForm() {
  const { data: status, session } = useSession()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("");
  const router = useRouter()


  const handleSubmit = async (e) => {
    e.preventDefault()

    try { 
      const result = await signIn('credentials',{
        redirect: false,
        email,
        password,
      })
      if (result?.error) {
        setError("Invalid Credentials")
      }
      else {
        router.push('/')
      }
    }
    
    catch (error) {
      console.log("Error during login: ", error);
      setError("An error occurred during login");
    }
  }
  if (status === "loading") {
    return null;
  }

  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen w-full text-black">
        <div className="shadow-lg p-5 rounded-md bg-[#ffffff] min-w-[300px] min-h-[400px]">
          <p className="text-purple-700 font-medium upp text-center border-b border-purple-500 py-2 my-5">Login to <span className="font-bold uppercase text-purple-500">PE TRACKER</span></p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
            <input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <div className="w-full flex flex-col gap-3">
              <button type="submit" className="w-full bg-purple-500 py-2 px-3 rounded-md text-center cursor-pointer hover:bg-purple-700 transition-all ease-in-out">
                <p className="text-white uppercase font-bold">Login</p>
              </button>
            </div>
            {error && (
              <div className="bg-red-500 text-white text-sm py-2 px-3 rounded-md mt-2 w-full text-center">
                <p> {error}</p>
              </div>
            )}
            <Link href={"/register"}>
              <p className="text-sm mt-3 text-right hover:text-purple-500 transition-all ease-in-out">Don`t have an account? <span className="underline text-purple-500">Register</span></p>
            </Link>
          </form>
        </div>
      </div>
    );
  } 

}

