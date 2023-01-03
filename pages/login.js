import Layout from "../components/Layout";
import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function LoginPage() {
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      router.push("/");
    }
  }, [router, session]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async ({ email, password }) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result?.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(err);
    }
  };
  return (
    <Layout title="Login">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Login</h1>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="w-full"
            id="email"
            autoFocus
            {...register("email", {
              required: "Please enter your email address",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "Please enter a valid email address",
              },
            })}
          ></input>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Please enter your password",
              minLength: {
                value: 6,
                message: "Your password must contain at least 6 characters",
              },
            })}
            className="w-full"
            id="password"
            autoFocus
          ></input>
          {errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-4 ">
          <button className="primary-button">Login</button>
        </div>
        <div className="mb-4 ">
          Don&apos;t have an account? &nbsp;
          <Link href="/register">Sign Up</Link>
        </div>
      </form>
    </Layout>
  );
}

export default LoginPage;
