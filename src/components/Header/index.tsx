import Link from "next/link";
import { Hamburger } from "../Hamburger";

interface HeaderProps {
  /* props go here */
}

export function Header() {
  return (
    <header className="h-[100px]    ">
      <div className='containerLembrar w-[1280px] min-w-[1280px] mx-auto'>
        <div className='wrapper px-[48px] Lembrar'>
          <div className='inner-header relative z-10 h-[100px] flex justify-between items-center '>
            <div className='logo'>
              <Link href='/' className="font-bold text-[#191919]">JRD</Link>
            </div>
            <div className='menu'>
              <button className="text-[.8rem] text-[#191919] ">Menu</button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger />
    </header>
  );
}
