"use client"

import React from "react";
import Image from "next/image";
import { navItems } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Header = () => {
    
    const pathName = usePathname();

    return (
        <header className="header">
            <Image src="/assets/logo.png" alt="logo" width={80} height={80} />
            <nav className="header-nav">
                <ul className="flex gap-6 md:gap-20">
                {navItems.map(({ name, url }) => (
                    <Link href={url} key={name} className="lg:w-full">
                    <li
                        className={cn(
                        "sidebar-nav-item",
                        pathName === url && "shad-active",
                        )}
                    >
                        <p className="hidden lg:block">{name}</p>
                    </li>
                    </Link>
                ))}
                </ul>
            </nav>
            <Button>Fale conosco</Button>
        </header>
    )
}

export default Header;