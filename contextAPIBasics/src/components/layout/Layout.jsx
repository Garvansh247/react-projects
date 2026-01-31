import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";

function Layout() {
    return (
        <>
            <Header />
            <main className=" text-black dark:text-white min-h-screen transition-colors duration-300">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
export default Layout;