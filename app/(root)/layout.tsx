import Header from "@/components/header";
import React from "react";

export const dynamic = "force-dynamic";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex h-screen flex-col">
          <Header/>
        <section className="flex h-full flex-1 flex-col">
          <div className="main-content">{children}</div>
        </section>
      </main>
    )
}

export default Layout;