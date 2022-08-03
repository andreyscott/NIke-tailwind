import Header from "components/Header/Header";
import Navbar from "components/Navbar/Navbar";
import React from "react";


const AppLayout = () => {
    return (
        <div className="justify-center font-sans text-center items-center">
        <Header />
        <Navbar />
        </div>
    );
    }
export default AppLayout;