// importing link
import Link from "next/link";
// importing router
import { useRouter } from "next/router";



export default function Nav({ show }) {
  const inactiveLink = 'flex p-1 items-center justify-center h-[3rem] text-center  rounded-sm font-medium uppercase w-full';
  const activeLink = inactiveLink + 'flex p-1 items-center justify-center h-[3rem] text-center bg-purple-500 text-[#fff] rounded-sm font-bold uppercase w-full';
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className={(show ? 'left-0' : '-left-full') + " top-0 grey_text bg-white p-5 fixed w-full  min-h-screen md:static md:w-auto transition-all ease-in-out duration-[0.75s] z-[3]"}>
  
      <nav className="flex flex-col items-center justify-center text-center gap-2 mt-10 text-purple-700 w-full ">
        <Link href={'/'} className={pathname === '/' ? activeLink : inactiveLink}>
     
          <h5> Home</h5>
        </Link>
           <Link href={'/equipment'} className={pathname.includes('/equipment') ? activeLink : inactiveLink}>
          <h5>  Equipment</h5>
        </Link>
        <Link href={'/tracking'} className={pathname.includes('/tracking') ? activeLink : inactiveLink}>
          <h5>  Tracking</h5>
        </Link>
        <Link href={'/exercise'} className={pathname.includes('/exercise') ? activeLink : inactiveLink}>
          <h5> Exercise</h5>
        </Link>
        {/* <Link href={'/stats'} className={pathname.includes('/stats') ? activeLink : inactiveLink}>
          <h5>  Stats</h5>
        </Link> */}
        {/* <Link href={'/settings'} className={pathname.includes('/settings') ? activeLink : inactiveLink}>
          <h5>  Settings</h5>
        </Link> */}
        {/* <Link href={'/account'} className={pathname.includes('/account') ? activeLink : inactiveLink}>
          <h5>  Account</h5>
        </Link> */}
               <Link href={'/faq'} className={pathname.includes('/faq') ? activeLink : inactiveLink}>
          <h5>  FAQ</h5>
        </Link>
               <Link href={'/policy'} className={pathname.includes('/policy') ? activeLink : inactiveLink}>
          <h5>  Policy</h5>
        </Link>
      </nav>
    </div>
  );
}