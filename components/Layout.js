import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout({ title, children }) {
  const { status, data: session } = useSession();
  return (
    <>
      <Head>
        <title>{title ? title + " - Clamazon" : "Clamazon"}</title>
        <meta
          name="description"
          content="Oder the finest saltwater invertebrates and corals straight to your door."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between">
            <Link className="text-lg p-2" href="/">
              Clamazon
            </Link>
            <div>
              <Link className="p-2" href="/cart">
                Cart
              </Link>
              {status === "loading" ? (
                "Loading"
              ) : session?.user ? (
                session.user.name
              ) : (
                <Link className="p-2" href="/login">
                  Login
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center ">
          <p>Copyright© 2023 Clamazon</p>
        </footer>
      </div>
    </>
  );
}

export default Layout;
