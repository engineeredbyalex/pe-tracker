// importing session
import { useSession } from 'next-auth/react';
// importing singOut
import { signOut } from "next-auth/react";

function Header() {
  const { data: session, status } = useSession()
  console.log(session)

  return (
    <div className=' flex absolute top-[1rem] right-[1rem]'>
      <div className="flex flex-row gap-5 items-center">
        {/* <div className="w-[3rem] h-[3rem] bg-black rounded-full">
          </div> */}
        <p>{ session.user.email}</p>
        <button className="py-2 px-10 rounded-md text-[#fff] bg-purple-500 hover:bg-purple-700 text-center  cursor-pointer  transition-all ease-in-out" onClick={() => signOut("credentials")}>
          <p>  Sign Out</p>
        </button>
      </div>
    </div>
  )
}

export default Header