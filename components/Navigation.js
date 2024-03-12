// importing link
import Link from "next/link";
// importing router
import { useRouter } from "next/router";
// importing icons

export default function Nav({ show }) {
  const inactiveLink = 'flex  p-1 items-center justify-center h-[3rem] text-center uppercase';
  const activeLink = inactiveLink + 'flex p-1 items-center justify-center h-[3rem] text-center  bg-purple-500 text-[#fff] rounded-sm font-bold uppercase w-full';
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className={(show ? 'left-0' : '-left-full') + " top-0 grey_text bg-white p-5 fixed w-full  min-h-screen md:static md:w-auto transition-all ease-in-out duration-[0.75s] z-[3]"}>
  
      <nav className="flex flex-col items-center justify-center text-center gap-2 mt-10 text-purple-700 w-full ">
        <Link href={'/'} className={pathname === '/' ? activeLink : inactiveLink}>
     
          <h5> Home</h5>
        </Link>
        <Link href={'/tracking'} className={pathname.includes('/tracking') ? activeLink : inactiveLink}>
     
          <h5>  Tracking</h5>
        </Link>
      </nav>
    </div>
  );
}