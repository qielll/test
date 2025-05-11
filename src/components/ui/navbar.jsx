"use client";

import { useState } from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-[#AAAAAA] border">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between flex-col md:flex md:flex-row">
        <div className="flex gap-10 w-full justify-between md:w-auto">
          <div className="flex items-center gap-4">
            <Image src={"/logo.png"} width={60} height={60} alt="logo" />
            <h1 className="text-primary font-semibold hover:text-[#F5995C]">anti.diskriminasi</h1>
          </div>

          {/* Toggle Button */}
          <button className="md:hidden text-primary" onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <NavigationMenu>
          {/* Animate  menu open/close */}
          <div className={`overflow-hidden transition-all duration-400 ease-in-out md:overflow-visible md:max-h-full ${isOpen ? "max-h-[500px]" : "max-h-0"} md:flex md:max-h-none`}>
            <NavigationMenuList className="flex flex-col top-full left-0 w-full bg-white z-10 p-4 space-y-2 md:space-y-0 md:static md:flex md:flex-row md:items-center md:space-x-4 md:bg-transparent">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="text-primary px-4 py-2 font-semibold hover:text-[#F5995C]">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/edukasi" className="text-primary px-4 py-2 font-semibold hover:text-[#F5995C]">
                    Edukasi
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/layanan" className="text-primary px-4 py-2 font-semibold hover:text-[#F5995C]">
                    Layanan
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className="text-primary px-4 py-2 font-semibold hover:text-[#F5995C]">
                    Tentang Kami
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/tentang-diskriminasi" className="text-primary px-4 py-2 font-semibold hover:text-[#F5995C]">
                    Tentang Diskriminasi
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </div>

          <NavigationMenuViewport />
        </NavigationMenu>
      </div>
    </div>
  );
}
