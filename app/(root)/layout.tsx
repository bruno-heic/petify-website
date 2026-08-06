import Header from "@/components/header";
import MobileHeader from "@/components/mobileHeader";
import React from "react";
import Footer from "@/components/footer"

export const dynamic = "force-dynamic";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex flex-col min-h-screen">
        <Header/>
        <MobileHeader/>
        <main className="flex-1">
          {children}
        </main>
        <Footer/>
      </div>
    )
}

export default Layout;