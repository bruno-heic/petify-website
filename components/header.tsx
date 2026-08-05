import React from "react";
import Image from "next/image";
const Header = () => {
    return (
        <header className="header">
            <Image src="/assets/logo.png" alt="logo" width={80} height={80} />
            <nav>
                <ul>
                    
                </ul>
            </nav>
        </header>
    )
}

export default Header;