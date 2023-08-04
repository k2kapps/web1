"use client";
import appwriteService from "@/appwrite/config";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, {FormEvent, useState} from "react";


const addentry = () => {

    const router = useRouter()
    const [formData, setFormData] = useState({
        generator: "",
        origin: "",
        destination: ""
    })
    const [error, setError] = useState("")

    //const {setAuthStatus} = useAuth()

    const create = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            //const userData = await appwriteService.putdata(formData.supplier,formData.origin,formData.destination)
            const userData = await appwriteService.putdata(formData)
            alert("Data Added Succussfully........!")
        } catch (error: any) {
            setError(error.message)
        }
    }

    return(
            <div className={`mx-auto w-full max-w-lg bg-white rounded-xl p-10`}>
                <h2 className="text-center text-2xl font-bold leading-tight text-black">
                    Add Entry
                </h2>

                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={create} className="mt-8" >
                    <div className="space-y-2 grid grid-cols-2 gap-4">
                        <div >
                            <label htmlFor="generator" className="text-base font-medium text-gray-900">
                                Supplier Name
                            </label>
                            <div className="mt-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    placeholder="Full Name"
                                    id="generator"
                                    value={formData.generator}
                                    onChange={(e) =>
                                        setFormData((prev) => ({ ...prev, generator: e.target.value }))
                                    }
                                    required
                                />
                            </div>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="origin" className="text-base font-medium text-gray-900">
                                Origin
                            </label>
                            <div className="mt-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    placeholder="Origin"
                                    id="origin"
                                    value={formData.origin}
                                    onChange={(e) =>
                                        setFormData((prev) => ({ ...prev, origin: e.target.value }))
                                    }
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="dest" className="text-base font-medium text-gray-900">
                                Destination
                            </label>
                            <div className="mt-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    placeholder="Destination"
                                    id="destination"
                                    value={formData.destination}
                                    onChange={(e) =>
                                        setFormData((prev) => ({ ...prev, destination: e.target.value }))
                                    }
                                    required
                                />
                            </div>
                        </div>
                    
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="pickdate" className="text-base font-medium text-gray-900">
                                    PickUp Date
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="date"
                                    id="pickdate"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="delidate" className="text-base font-medium text-gray-900">
                                    Delivery Date
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="date"
                                    id="delidate"
                                />
                            </div>
                        </div>
                        <br></br>
                        <div>
                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-primary/80"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
   
    )
}

export default addentry;