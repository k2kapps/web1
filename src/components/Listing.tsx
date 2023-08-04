"use client";
import appwriteService, { AppwriteService } from "@/appwrite/config";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import React, {FormEvent, useState, useEffect} from "react";
import { promises } from "stream";
import { Client,Databases,Query } from "appwrite";

function todo(){

  const [todos, setTodos] = useState()
  const [loader, setLoader] = useState(false)
  const db1 = appwriteService.getdata()
  useEffect(()=>{
    setLoader(true)
    db1.then(
      function(response){
        console.log(response.documents[0].origin)
      },
      function(error){
        console.log(error)
      }
    )
  },[])
}


const Signup = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
    })

    //todo()
    const animals = ["Dog", "Bird", "Cat", "Mouse", "Horse"]
    const [todos, setTodos] = useState()
    const [loader, setLoader] = useState(false)
    const [name, setName] = useState<any[]>([]);
    
    useEffect(()=>{
      const db1 = appwriteService.getdata()
      setLoader(true)
      db1.then(
        function(response){
          //console.log(response.documents[0].origin)
          setName(response.documents)
        },
        function(error){
          console.log(error)
        }
      )
    },[])

  return(
    <div
      className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Supplier
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Origin
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Destination
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Pickup Date
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Delivery Date
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Action
              </th>
            </tr>
          </thead>
          {name.map(data => (
            <tbody>    
            <tr>
              <td className="py-5 px-4 pl-9 xl:pl-11">
                <h5 className="font-medium text-black dark:text-white">
                  {data.generator}
                </h5>
                <p className="text-sm">{}</p>
              </td>
              <td className="py-5 px-4">
                <p className="text-black dark:text-white">{data.origin}</p>
              </td>
              <td className="py-5 px-4">
                <p className="inline-flex rounded-full bg-warning bg-opacity-10 py-1 px-3 text-sm font-medium text-warning">
                  {data.destination}
                </p>
              </td>
              <td className="py-5 px-4">
                    <p className="inline-flex rounded-full bg-warning bg-opacity-10 py-1 px-3 text-sm font-medium text-warning">
                      {data.pickupdate}
                    </p>
              </td>
              <td className="py-5 px-4">
                <p className="inline-flex rounded-full bg-warning bg-opacity-10 py-1 px-3 text-sm font-medium text-warning">
                  {data.deliverydate}
                </p>
              </td>
              <td className="py-5 px-4">
                <div className="flex items-center space-x-3.5">
                <button className="rounded-md border-2 border-indigo-600 bg-sky-300 hover:bg-sky-500 p-1" onClick={appwriteService.getdata}>
                  BID
                </button>
                </div>
              </td>
            </tr>
          </tbody>
            
          ))}
        
    
          
        </table>
      </div>
    </div>  
    )


}

export default Signup;