import Register from "@/components/Listing";
import Link from "next/link";
import React from "react";

const RegisterPage = () => {
    return (
    <div className="w-9/12 max-w-fit mx-auto py-2 flex flex-wrap gap-y-6">
                <h1 className=" w-full flex items-center gap-x-4">
                    <Link href={"../"}>
                        <span className="inline-flex justify-center items-center w-10 h-10 bg-gray-200/70 hover:bg-gray-100 rounded-xl">
                            &lt;
                        </span>
                    </Link>
                    <span className="text-1xl font-bold">My Account</span>
                </h1>
                <Register />
            </div>

    );
}

export default RegisterPage;