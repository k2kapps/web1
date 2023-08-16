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

function getTime(t1:string): string {
  var d1 = parseInt(t1)
  var datestr = new Date(d1);
  console.log("ttttt---"+datestr.toLocaleString())
  return datestr.toLocaleString()
}

const Signup = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
    })

    const [todos, setTodos] = useState()
    const [loader, setLoader] = useState(false)
    const [name, setName] = useState<any[]>([]);
    
    useEffect(()=>{
      const db1 = appwriteService.getmydata()
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
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Supplier
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Origin
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Destination
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Pickup Date
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Delivery Date
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Goods Type
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Tonnage
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Action
              </th>
            </tr>
          </thead>
          {name.map(data => (
            <tbody>    
            <tr>
              <td className="py-5 px-4">
                <p className="text-sm text-black dark:text-white">
                  {data.generator}
                </p>
                <p className="text-sm">{}</p>
              </td>
              <td className="py-5 px-4">
                <p className="text-sm text-black dark:text-white">
                  {data.origin}</p>
              </td>
              <td className="py-5 px-4">
                <p className="text-sm text-black dark:text-white">
                  {data.destination}
                </p>
              </td>
              <td className="py-5 px-4">
                    <p className="text-sm text-black dark:text-white">
                      {getTime(data.pickdate)}
                    </p>
              </td>
              <td className="py-5 px-4">
                <p className="text-sm text-black dark:text-white">
                  {getTime(data.delidate)}
                </p>
              </td>
              <td className="py-5 px-4">
                <p className="text-sm text-black dark:text-white">
                  {data.goodstype}
                </p>
              </td>
              <td className="py-5 px-4">
                <p className="text-sm text-black dark:text-white">
                  {data.tonnage}
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