"use client";

import { State } from "@/types";
import Link from "next/link";
import { RefObject, useEffect, useRef } from "react";
import { gsap } from "gsap";

interface HamburgerProps {
  state: State;
}

export function Hamburger({ state }: HamburgerProps) {
  let menu = useRef<HTMLDivElement>(null);
  let revealMenu = useRef<HTMLDivElement>(null);
  let revealMenuBackground = useRef<HTMLDivElement>(null);
  let cityBackground = useRef<HTMLDivElement>(null);
  let line1 = useRef<HTMLAnchorElement>(null);
  let line2 = useRef<HTMLAnchorElement>(null);
  let line3 = useRef<HTMLAnchorElement>(null);
  let info = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menu.current && revealMenuBackground.current && revealMenu.current) {
      if (state.clicked === false) {
        gsap.to([revealMenu.current, revealMenuBackground.current], {
          duration: 0.8,
          height: 0,
          ease: "power3.inOut",
          stagger: {
            amount: 0.07,
          },
        });
        gsap.to(menu.current, {
          duration: 1,
          css: { display: "none" },
        });
      } else if (
        state.clicked === true ||
        (state.clicked === true && state.initial === null)
      ) {
        gsap.to(menu.current, {
          duration: 0,
          css: { display: "block" },
        });
        gsap.to([revealMenuBackground.current, revealMenu.current], {
          duration: 0,
          opacity: 1,
          height: "100%",
        });

        staggerReveal(revealMenuBackground.current, revealMenu.current);
      }
    }
  }, [state]);

  const staggerReveal = (node1: HTMLDivElement, node2: HTMLDivElement) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  };

  return (
    <div
      ref={menu}
      className='hambruger-menu hidden z-[9] fixed inset-0 h-full w-full '
    >
      <div
        ref={revealMenuBackground}
        className='menu-secondary-background-color fixed inset-0 h-full w-full bg-black z-[-1] '
      />
      <div
        ref={revealMenu}
        className='menu-layer relative bg-red-700 h-full overflow-hidden '
      >
        <div
          ref={cityBackground}
          className='menu-city-background inset-0 absolute h-full w-full opacity-0  '
        ></div>
        <div className='containerLembrar w-[1280px] min-w-[1280px] mx-auto'>
          <div className='wrapper px-[48px] relative '>
            <div className='menu-links flex justify-between items-center relative top-[200px] '>
              <nav className='block'>
                <ul className='p-0 m-0'>
                  <li className='text-[6rem] font-bold cursor-pointer h-[135px] overflow-hidden relative w-[700px] '>
                    <Link
                      ref={line1}
                      href='/opportunities'
                      className='absolute text-white hover:text-black '
                    >
                      Oportunities
                    </Link>
                  </li>
                  <li className='text-[6rem] font-bold cursor-pointer h-[135px] overflow-hidden relative w-[700px] '>
                    <Link
                      ref={line2}
                      href='/solutions'
                      className='absolute text-white hover:text-black '
                    >
                      solutions
                    </Link>
                  </li>
                  <li className='text-[6rem] font-bold cursor-pointer h-[135px] overflow-hidden relative w-[700px] '>
                    <Link
                      ref={line3}
                      href='/contact'
                      className='absolute text-white hover:text-black '
                    >
                      contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={info} className='info text-white w-[300px] '>
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
