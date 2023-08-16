"use client";
import appwriteService from "@/appwrite/config";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, {FormEvent, useState} from "react";
import {useRef} from 'react';


const addentry = () => {

    const router = useRouter()
    const [formData, setFormData] = useState({
        generator: "",
        origin: "",
        destination: "",
        pd1:"",
        dd1:"",
        gtype:"",
        tonn:""
    })
    const [error, setError] = useState("")
    const inputdt1 = useRef(null);
    const inputdt2 = useRef(null);

    //const {setAuthStatus} = useAuth()

    const create = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            //const userData = await appwriteService.putdata(formData.supplier,formData.origin,formData.destination)
            const userData = await appwriteService.putdata(formData)
            alert("Data Added Succussfully........!")
            setFormData({...formData,generator:"",origin:"",destination:"",gtype:"",tonn:""})
        } catch (error: any) {
            setError(error.message)
        }
    }

    return(
            <div className={`mx-auto w-full max-w-lg bg-white rounded-xl p-10`}>
                <h4 className="text-left font-bold leading-tight text-black">
                    Add Entry
                </h4>

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
                            <label htmlFor="gtype" className="text-base font-medium text-gray-900">
                                Goods Type
                            </label>
                            <div className="mt-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    placeholder="Goods Type"
                                    id="gtype"
                                    value={formData.gtype}
                                    onChange={(e) =>
                                        setFormData((prev) => ({ ...prev, gtype: e.target.value }))
                                    }
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="gtype" className="text-base font-medium text-gray-900">
                                Tonnage
                            </label>
                            <div className="mt-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    placeholder="Tonnage"
                                    id="tonn"
                                    value={formData.tonn}
                                    onChange={(e) =>
                                        setFormData((prev) => ({ ...prev, tonn: e.target.value }))
                                    }
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                <label id="comp_lb_pd">PickUp Date:</label>
                                <input className="bg-slate-200" type="datetime-local" id="comp_pickdt" name="comp_pickdt"
                                ref={inputdt1}
                                onChange={(e) =>{
                                    const date = new Date(inputdt1.current.value)
                                    var v1 = date.getTime()
                                    console.log(v1)
                                    setFormData({ ...formData, pd1: String(v1)})
                                    //inputRef.current = Date.now()
                                }
                                }/>
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                <label id="comp_lb_dd">Delivery Date:</label>
                                <input className="bg-slate-200" type="datetime-local" id="comp_delidt" name="comp_delidt"
                                ref={inputdt2}
                                onChange={(e) =>{
                                    const date = new Date(inputdt2.current.value)
                                    var v2 = date.getTime()
                                    console.log(v2)
                                    setFormData({ ...formData, dd1: String(v2)})
                                    //inputRef.current = Date.now()
                                }
                                }/>
                            </div>
                        </div>

                        <div>
                            <button
                                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-primary/80"
                            >
                                Cancel
                            </button>
                        </div>
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