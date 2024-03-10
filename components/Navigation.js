// importing link
import Link from "next/link";
// importing router
import { useRouter } from "next/router";
// importing icons
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineShop } from "react-icons/ai";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";


export default function Nav({ show }) {
  const inactiveLink = 'flex gap-1 p-1 items-center justify-center h-[3rem]';
  const activeLink = inactiveLink + ' bg-purple-500 text-[#fff] rounded-sm font-bold uppercase ';
  const inactiveIcon = 'w-6 h-6  ';
  const activeIcon = inactiveIcon + ' text-grey';
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className={(show ? 'left-0' : '-left-full') + " top-0 grey_text bg-anti-flash-white p-4 fixed w-full  min-h-screen md:static md:w-auto transition-all ease-in-out duration-500 z-[3]"}>
      <div className="mb-4 flex items-center justify-center w-full  ">
        <h3 className="font-bold text-purple-700 uppercase">PP-TRacker</h3>
      </div>
      <nav className="flex flex-col gap-2 mt-10 text-purple-700 ">
        <Link href={'/'} className={pathname === '/' ? activeLink : inactiveLink}>
          <div className={pathname === '/' ? activeIcon : inactiveIcon}>
            <AiOutlineAppstore size={20} />
          </div>
          Home
        </Link>
        <Link href={'/exercise'} className={pathname.includes('/products') ? activeLink : inactiveLink}>
          <div className={pathname.includes('/products') ? activeIcon : inactiveIcon}>
            <AiOutlineShop size={20} />
          </div>
          Exercise
        </Link>
        <Link href={'/tracking'} className={pathname.includes('/categories') ? activeLink : inactiveLink}>
          <div className={pathname.includes('/categories') ? activeIcon : inactiveIcon}>
            <AiOutlineFolderOpen size={20} />
          </div>
          Tracking
        </Link>
        <Link href={'/tracking'} className={pathname.includes('/categories') ? activeLink : inactiveLink}>
          <div className={pathname.includes('/categories') ? activeIcon : inactiveIcon}>
            <AiOutlineFolderOpen size={20} />
          </div>
          Tracking History
        </Link>
        <Link href={'/equipment'} className={pathname.includes('/orders') ? activeLink : inactiveLink}>
          <div className={pathname.includes('/orders') ? activeIcon : inactiveIcon}>
            <AiOutlineShoppingCart size={20} />
          </div>
          Equipment
        </Link>
        <Link href={'/settings'} className={pathname.includes('/settings') ? activeLink : inactiveLink}>
          <div className={pathname.includes('/settings') ? activeIcon : inactiveIcon}>
            <AiFillSetting size={20} />
          </div>
          Settings
        </Link>
      </nav>
    </div>
  );
}