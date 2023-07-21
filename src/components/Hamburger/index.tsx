"use client";

import { State } from "@/types";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface HamburgerProps {
  state: State;
}

export function Hamburger({ state }: HamburgerProps) {
  let menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menu.current) {
      if (state.clicked === false) {
        menu.current.style.display = "none";
      } else if (
        state.clicked === true ||
        (state.clicked === true && state.initial === null)
      ) {
        menu.current.style.display = "block";
      }
    }
  }, [state]);

  return (
    <div
      ref={menu}
      className='hambruger-menu hidden z-[9] fixed inset-0 h-full w-full '
    >
      <div className='menu-secondary-background-color fixed inset-0 h-full w-full bg-black z-[-1] '></div>
      <div className='menu-layer relative bg-red-700 h-full overflow-hidden '>
        <div className='menu-city-background inset-0 absolute h-full w-full opacity-0  '></div>
        <div className='containerLembrar w-[1280px] min-w-[1280px] mx-auto'>
          <div className='wrapper px-[48px] relative '>
            <div className='menu-links flex justify-between items-center relative top-[200px] '>
              <nav className='block'>
                <ul className='p-0 m-0'>
                  <li className='text-[6rem] font-bold cursor-pointer h-[135px] overflow-hidden relative w-[700px] '>
                    <Link
                      href='/opportunities'
                      className='absolute text-white hover:text-black '
                    >
                      Oportunities
                    </Link>
                  </li>
                  <li className='text-[6rem] font-bold cursor-pointer h-[135px] overflow-hidden relative w-[700px] '>
                    <Link
                      href='/solutions'
                      className='absolute text-white hover:text-black '
                    >
                      solutions
                    </Link>
                  </li>
                  <li className='text-[6rem] font-bold cursor-pointer h-[135px] overflow-hidden relative w-[700px] '>
                    <Link
                      href='/contact'
                      className='absolute text-white hover:text-black '
                    >
                      contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className='info text-white w-[300px] '>
                <h3 className='text-[1.2rem] my-2 mx-auto '>Our Promises</h3>
                <p className='mx-auto text-[.8rem] '>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus nulla praesentium, nemo vero alias iure reprehenderit
                  enim beatae consectetur, ipsam at culpa itaque officia est
                  aspernatur architecto voluptates, exercitationem tempora.
                </p>
              </div>
              <div className='locations absolute bottom-[-80px] text-white mt-4 text-[.8rem] font-semibold '>
                Locations:
                <span className='cursor-pointer mx-8 my-0 transition-all duration-[.3s] hover:bg-black hover:py-2 hover:px-6 rounded font-normal ml-16 '>
                  Dallas
                </span>
                <span className='cursor-pointer mx-8 my-0 transition-all duration-[.3s] hover:bg-black hover:py-2 hover:px-6 rounded font-normal  '>
                  Austin
                </span>
                <span className='cursor-pointer mx-8 my-0 transition-all duration-[.3s] hover:bg-black hover:py-2 hover:px-6 rounded font-normal  '>
                  New York
                </span>
                <span className='cursor-pointer mx-8 my-0 transition-all duration-[.3s] hover:bg-black hover:py-2 hover:px-6 rounded font-normal  '>
                  San Francisco{" "}
                </span>
                <span className='cursor-pointer mx-8 my-0 transition-all duration-[.3s] hover:bg-black hover:py-2 hover:px-6 rounded font-normal  '>
                  Benjin
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
