import React from "react";
import { Controller, useForm } from "react-hook-form";
import { RegisterUser } from "../Redux/thunks/userThunk";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const resultAction = await dispatch(RegisterUser(data)).unwrap();
      console.log(`resultAction: ${resultAction}`);
      alert(resultAction.message);
      navigate("/home");
      console.log(`resultActions`, resultAction);
    } catch (error) {
      console.log(`error in login `, error);
      alert(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[70%] h-[80%] bg-white shadow-md shadow-black rounded-lg flex justify-center items-center flex-col">
        <div className="font-bold text-lg">Sign In</div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[100%] flex justify-center items-center flex-col"
        >
          <div className="mb-4 w-[70%]">
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              rules={{ required: "First Name is required" }}
              render={({ field }) => (
                <>
                  <label className="input input-bordered flex items-center gap-2">
                    First Name
                    <input
                      {...field}
                      type="text"
                      className="grow"
                      placeholder="Abhilash"
                    />
                  </label>
                  {errors.firstName && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.firstName.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <div className="mb-4 w-[70%]">
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              rules={{ required: "last Name is required" }}
              render={({ field }) => (
                <>
                  <label className="input input-bordered flex items-center gap-2">
                    Last Name
                    <input
                      {...field}
                      type="text"
                      className="grow"
                      placeholder="pal"
                    />
                  </label>
                  {errors.lastName && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.lastName.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <div className="mb-4 w-[70%]">
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: "email is required" }}
              render={({ field }) => (
                <>
                  <label className="input input-bordered flex items-center gap-2">
                    Email
                    <input
                      {...field}
                      type="text"
                      className="grow"
                      placeholder="daisy@site.com"
                    />
                  </label>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <div className="mb-4 w-[70%]">
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: "password is required" }}
              render={({ field }) => (
                <>
                  {/* <input
                {...field}
                type="text"
                name="password"
                className="input input-bordered input-primary w-full max-w-xs"
              /> */}
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input {...field} type="password" className="grow" />
                  </label>
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.password.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <button
            type="submit"
            className="w-[70%] py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
