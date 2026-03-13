"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import VaaniLogo from "../assets/vaanilogo.png";

import { Button } from "./Button";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import ButtonDialog from "./Button2";
import Image from "next/image";
import IIScLogo from "../assets/IIScLogo.png";
import ArtparkLogo from "../assets/ARTPARK.png";

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  );
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

function Logo1() {
  return (
    <>
      <div className={"flex gap-6 bg-slate-60"}>
        <Link href={"https://www.iisc.ac.in/"}>
          <Image className="w-12 h-12 " src={IIScLogo} alt="IISc Logo" />
        </Link>
        <Link href={"https://artpark.in/language-data-ai"}>
          <Image
            className={"h-auto w-64"}
            src={ArtparkLogo}
            alt="Artpark Logo"
          />
        </Link>
      </div>
    </>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#Home">Home</MobileNavLink>
            <MobileNavLink href="#About">About</MobileNavLink>
            <MobileNavLink href="#Data">Data</MobileNavLink>
            <MobileNavLink href="#partners">Partners</MobileNavLink>
            <MobileNavLink href="#Team">Team</MobileNavLink>
            <MobileNavLink href="#Media">Media</MobileNavLink>
            <MobileNavLink href="/case-studies">Case Studies</MobileNavLink>
            {/* <div className="relative">
                <MobileNavLink href="#Leaderboard">Leaderboard</MobileNavLink>
                <div className="pl-6 flex flex-col">
                  <a href="#" className="p-2 text-sm text-slate-700">TranscriptionLeaderboard</a>
                </div>
              </div> */}
            <hr className="m-2 border-slate-300/40" />
            {/*<MobileNavLink href={"/api/auth/login"}>Member Sign in</MobileNavLink>*/}
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export function Header() {
  const [leaderboardOpen, setLeaderboardOpen] = useState(false);

  const toggleLeaderboard = () => {
    setLeaderboardOpen(!leaderboardOpen);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = () => {
    if (leaderboardOpen) {
      setLeaderboardOpen(false);
    }
  };

  return (
    <header className="py-5">
      <Container>
        <nav className="relative z-50 flex justify-between item-center">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <div className={"flex gap-2"}>
                {/* Logo Side*/}
                <div className={"flex gap-2 items-center rounded-full"}>
                  <Link href={"/"}>
                    <Image
                      src={VaaniLogo}
                      width={150}
                      height={150}
                      alt="Vaani Logo"
                    />
                  </Link>
                </div>
              </div>
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#Home">Home</NavLink>
              <NavLink href="#About">About</NavLink>
              <NavLink href="#Data">Data</NavLink>
              <NavLink href="#Team">Team</NavLink>
              <NavLink href="#Partners">Partners</NavLink>
              <NavLink href="#Media">Media</NavLink>
              <NavLink href="/case-studies">Case Studies</NavLink>
              {/* <div className="relative">
                <button 
                  onClick={toggleLeaderboard}
                  className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >
                  Leaderboard
                </button>
                {leaderboardOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 bg-white shadow-lg rounded-md py-2 w-64 z-10">
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-100"
                    >
                      Transcription Leaderboard
                    </a>
                  </div>
                )}
              </div> */}
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            {/*<div className="hidden md:block">*/}
            {/*  <NavLink href={"/api/auth/login"}>Member sign in</NavLink>*/}
            {/*</div>*/}
            <div className={"hidden md:block"}>
              <Logo1 />
            </div>

            {/*<ButtonDialog color={'blue'} mt={0}/>*/}
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
