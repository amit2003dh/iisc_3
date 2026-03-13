"use client";

import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import VaaniLogo from "../assets/vaanilogo.png";

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button
      as={Link}
      href={href}
      className="block w-full p-2 text-sm text-gray-700 hover:text-[#212191] transition-colors"
    >
      {children}
    </Popover.Button>
  );
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-gray-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx("origin-center transition", open && "scale-90 opacity-0")}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx("origin-center transition", !open && "scale-90 opacity-0")}
      />
    </svg>
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
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 z-50"
          >
            <MobileNavLink href="#Home">Home</MobileNavLink>
            <MobileNavLink href="#About">About</MobileNavLink>
            <MobileNavLink href="#Data">Data</MobileNavLink>
            <MobileNavLink href="#partners">Partners</MobileNavLink>
            <MobileNavLink href="#Team">Team</MobileNavLink>
            <MobileNavLink href="#Media">Media</MobileNavLink>
            <MobileNavLink href="/case-studies">Case Studies</MobileNavLink>
            <hr className="my-2 border-slate-200" />
            <MobileNavLink href="https://huggingface.co/datasets/ARTPARK-IISc/VAANI">
              Explore Data
            </MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

const NAV_LINKS = [
  { label: "Home", href: "#Home" },
  { label: "About", href: "#About" },
  { label: "Data", href: "#Data" },
  { label: "Team", href: "#Team" },
  { label: "Partners", href: "#partners" },
  { label: "Media", href: "#Media" },
  { label: "Case Studies", href: "/case-studies" },
];

export function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="nav-blur border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={VaaniLogo}
                width={110}
                height={36}
                alt="Vaani"
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>

            <div className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-[#212191] transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Link
                href="https://huggingface.co/datasets/ARTPARK-IISc/VAANI"
                target="_blank"
                className="inline-flex items-center text-sm font-semibold text-white px-4 py-1.5 rounded-full bg-[#212191] hover:bg-[#11115B] transition-colors"
              >
                Explore Data
              </Link>
              <Link
                href="mailto:vaanicontact@gmail.com"
                className="inline-flex items-center text-sm font-semibold text-[#212191] px-4 py-1.5 rounded-full border border-[#212191]/40 hover:bg-[#212191]/5 transition-colors"
              >
                Contact Us
              </Link>
            </div>

            <div className="md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
