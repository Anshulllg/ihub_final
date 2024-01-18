import Dashboard from "../../components/Dashboard/Dashboard";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Router from "next/router";
export default function Home() {
  const { status, data } = useSession();

  useEffect(() => { 
    
    if (status === "unauthenticated") Router.replace("/auth/login");
  }, [status]);
  return (
    <div className="main">
      <div className="main p-24">
        
      {status === "authenticated" ? (
        <Dashboard />
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold">Loading...</h1>
        </div>
      )}
      
      </div>
    </div>
  );
}
