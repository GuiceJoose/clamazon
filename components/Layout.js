import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Store } from "../utils/Store";
import { Menu } from "@headlessui/react";
import Cookies from "js-cookie";

function Layout({ title, children }) {
  const { status, data: session } = useSession();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const [cartItemsQuantity, setCartItemsQuantity] = useState(0);
  useEffect(() => {
    setCartItemsQuantity(cart.cartItems.reduce((a, b) => a + b.quantity, 0));
  }, [cart.cartItems]);

  const handleLogout = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };

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
                {cartItemsQuantity > 0 && (
                  <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                    {cartItemsQuantity}
                  </span>
                )}
              </Link>
              {status === "loading" ? (
                "Loading"
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-blue-600">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg ">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`dropdown-link ${active && "bg-gray-200"}`}
                          href="/account-info"
                        >
                          My Account
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`dropdown-link ${active && "bg-gray-200"}`}
                          href="/order-history"
                        >
                          Order History
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`dropdown-link ${active && "bg-gray-200"}`}
                          href="#"
                          onClick={handleLogout}
                        >
                          Logout
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
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
