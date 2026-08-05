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
                <ul className="flex gap-15 lg:gap-50">
                {navItems.map(({ name, url }) => (
                    <Link href={url} key={name} className="lg:w-full">
                    <li
                        className={cn(
                        "header-nav-item",
                        pathName === url && "text-button-primary",
                        )}
                    >
                        <p className="hidden md:flex">{name}</p>
                    </li>
                    </Link>
                ))}
                </ul>
            </nav>
            <Button className="primary-button" >Fale conosco</Button>
        </header>
    )
}

export default Header;