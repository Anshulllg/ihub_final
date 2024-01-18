"use client";
import '../styles/globals.css'
import React, { useLayoutEffect, useState } from "react";
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import LoadingScreen from '../components/LoadingScreen';
import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
        <SessionProvider session={pageProps.session}>
        <Navbar />
          <Component {...pageProps} />
          <Footer />
        </SessionProvider>
          
        </>
      )}
    </>
  );
}

export default MyApp;
