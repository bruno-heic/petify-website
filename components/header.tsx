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
            <Link href="/">
                <Image src="/assets/logo.png" alt="logo" width={80} height={80} />
            </Link>
            <nav className="header-nav">
                <ul className="flex gap-10 lg:gap-50">
                {navItems.map(({ name, url }) => (
                    <Link href={url} key={name} className="lg:w-full">
                    <li
                        className={cn(
                        "header-nav-item",
                        pathName === url && "text-button-primary",
                        )}
                    >
                        <p className="hidden sm:flex">{name}</p>
                    </li>
                    </Link>
                ))}
                </ul>
            </nav>
            <Button className="primary-button cursor-pointer">
                <a href="mailto:petify.help@gmail.com">Fale conosco</a>
            </Button>
        </header>
    )
}

export default Header;