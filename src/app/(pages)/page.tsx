"use client";

import useAuth from "@/context/useAuth";
import React from "react";
import ProfileCard from "@/components/ProfileCard";
import Login from "@/components/Login";

const Home = () => {
const {authStatus} = useAuth();
return (
    <div className="w-full max-w-7xl mx-auto px-8 justify-center ">


            <div className="w-full sm:w-1/2 px-2 flex flex-wrap justify=center">
                {authStatus ? (
                    <div className="max-w-md">
                        <ProfileCard />
                    </div>
                ) : (
                    <Login />
                )}
            </div>
        </div>

);
}

export default Home;