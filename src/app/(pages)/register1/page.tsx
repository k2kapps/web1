"use client";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import React from "react";
import Register from "@/components/Listing";

const RegisterPage = () => {
    const router = useRouter();
    const { authStatus } = useAuth();

    if (authStatus) {
        router.replace("/register");
        return <></>;
    }

    return(
       
            <Register />
      
    )
    
}

export default RegisterPage;