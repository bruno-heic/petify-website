"use client"

import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { usePathname } from "next/navigation";
import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MobileHeader = () => {
    
    const [open, setOpen] = React.useState(false);
    const pathName = usePathname();

    return (
        <header className="sm:hidden flex items-center justify-between p-3 px-5">
            <Image src="/assets/logo.png" alt="logo" width={60} height={60} />
            <div className="flex gap-5">
                <Button size="sm" className="mobile-primary-button" >Fale conosco</Button>
                <Sheet>
                    <SheetTrigger className="cursor-pointer">
                        <Image src="/assets/menu.svg" alt="menu" width={20} height={20} />
                    </SheetTrigger>
                    <SheetContent>
                            <nav>
                            <ul className="pt-20 flex flex-col pl-8 gap-6">
                                {navItems.map(({ name, url }) => (
                                    <Link href={url} key={name} className="lg:w-full">
                                    <li
                                        className={cn(
                                        "h1 text-3xl font-semibold",
                                        pathName === url && "text-button-primary",
                                        )}
                                    >
                                        <p className="">{name}</p>
                                    </li>
                                    </Link>
                                ))}
                            </ul>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

export default MobileHeader;