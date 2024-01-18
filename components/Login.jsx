import Head from 'next/head';
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { signIn } from "next-auth/react";
const Login = () => {
  const router = useRouter()
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

 const handleSubmit = async(e)=>{
    console.log(userInfo)
    // e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,

      callbackUrl: `${window.location.origin}/auth/dashboard`,
    });

    console.log(res);
   

 }
  return (
    <>
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="text"
                      className=" p-2 rounded-md peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          
          placeholder="john@email.com"
                    />
                    
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="p-2 peer rounded-md  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      value={userInfo.password}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          
          placeholder="********"
                    />
                    
                  </div>
                  <div className="relative">
                    <button className="bg-blue-500 text-white rounded-md px-2 py-1" onClick={()=>handleSubmit()}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
