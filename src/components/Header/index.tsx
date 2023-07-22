"use client";
import Link from "next/link";
import { Hamburger } from "../Hamburger";
import { useEffect, useState } from "react";
import { State } from "@/types";
import { usePathname } from "next/navigation";

interface HeaderProps {
  /* props go here */
}

export function Header() {
  const pathName = usePathname();
  const [state, setState] = useState<State>({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setState(prev => {
      return { ...prev, clicked: false, menuName: "Menu" };
    });
  }, [pathName]);

  // melhorar essa função depois
  const handleMenu = () => {
    disabledMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        ...state,
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        ...state,
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  const disabledMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header className='h-[100px]    '>
      <div className='containerLembrar w-[1280px] min-w-[1280px] mx-auto'>
        <div className='wrapper px-[48px] Lembrar'>
          <div className='inner-header relative z-10 h-[100px] flex justify-between items-center '>
            <div className='logo'>
              <Link href='/' className='font-bold text-[#191919]'>
                JRD
              </Link>
            </div>
            <div className='menu'>
              <button
                disabled={disabled}
                onClick={handleMenu}
                className='text-[.8rem] text-[#191919] disabled:cursor-not-allowed '
              >
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
}
