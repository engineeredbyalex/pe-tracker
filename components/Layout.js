// importing session
import { useSession } from "next-auth/react"
// importing naviagtion
import Navigation from "./Navigation"
// importing state
import { useState } from "react"
// importing login page
import LoginForm from "./Forms/LoginForm"


function Layout({children}) {
  const { data: session, status } = useSession()
  const [showNav, setShowNav] = useState(false);

  if (status === 'authenticated') {
    return (
      <div className="bg-bgGray min-h-screen ">
          <div className="md:hidden flex items-center justify-start p-4">
            <button className="z-[5]" onClick={() => setShowNav(!showNav)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(126 34 206) " className="w-10 h-10">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        <div className="flex">
          <Navigation show={showNav} />
          <div className="flex p-4 items-center justify-center w-full">
            {children}
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="bg-bgGray w-screen h-screen flex items-center justify-center">
        <LoginForm />
      </div>
    );
  }
}

export default Layout