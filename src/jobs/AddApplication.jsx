import axios from "axios";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function AddApplication() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await axios.post(`${API_URL}/jobs/createjob`, data);
      console.log(`response`, response?.data);
      if (response?.data?.status === 200) {
        alert("Application created successfully");
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[70%] h-[90%] shadow-md shadow-black rounded-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[100%] flex justify-center items-center flex-col"
        >
          <div className="w-[70%] ">
            <Controller
              name="position"
              control={control}
              defaultValue=""
              rules={{ required: "Position is required" }}
              render={({ field }) => (
                <>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-lg font-semibold ">
                        Enter Position
                      </span>
                      {/* <span className="label-text-alt">Top Right label</span> */}
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                      onChange={(e) => {
                        clearErrors("position");
                        field.onChange(e);
                      }}
                    />
                    <div className="label"></div>
                  </label>
                  {errors.position && (
                    <p className="ml-2 text-sm text-red-600 text-start">
                      {errors.position.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <div className="w-[70%] ">
            <Controller
              name="contract"
              control={control}
              defaultValue=""
              rules={{ required: "Contract is required" }}
              render={({ field }) => (
                <>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">select Contract</span>
                      {/* <span className="label-text-alt">Alt label</span> */}
                    </div>
                    <select
                      {...field}
                      onChange={(e) => {
                        field.onChange(e); // Ensure the field value is updated
                        clearErrors("contract"); // Clear the error
                      }}
                      className="select select-bordered"
                    >
                      <option disabled selected>
                        Contract
                      </option>
                      <option>Part Time</option>
                      <option>Full Time</option>
                    </select>
                    <div className="label"></div>
                  </label>
                  {errors.contract && (
                    <p className="ml-2 text-sm text-red-600 text-start">
                      {errors.contract.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <div className=" w-[70%]">
            <Controller
              name="companyName"
              control={control}
              defaultValue=""
              rules={{ required: "company Name is required" }}
              render={({ field }) => (
                <>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-lg font-semibold">
                        Enter Company Name
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                      onChange={(e) => {
                        clearErrors("companyName");
                        field.onChange(e);
                      }}
                    />
                    <div className="label"></div>
                  </label>
                  {errors.companyName && (
                    <p className="ml-2 text-start text-sm text-red-600">
                      {errors.companyName.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <div className=" w-[70%]">
            <Controller
              name="location"
              control={control}
              defaultValue=""
              rules={{ required: "Location is required" }}
              render={({ field }) => (
                <>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-lg font-semibold">
                        Enter Company Location
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                      onChange={(e) => {
                        clearErrors("location");
                        field.onChange(e);
                      }}
                    />
                    <div className="label"></div>
                  </label>
                  {errors.location && (
                    <p className="mt-2 text-start text-sm text-red-600">
                      {errors.location.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <div className=" w-[70%]">
            <Controller
              name="description"
              control={control}
              defaultValue=""
              rules={{ required: "Description is required" }}
              render={({ field }) => (
                <>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-lg font-semibold">
                        Description
                      </span>
                    </div>
                    <textarea
                      placeholder="Description"
                      className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                      onChange={(e) => {
                        clearErrors("description");
                        field.onChange(e);
                      }}
                    ></textarea>
                    <div className="label"></div>
                  </label>
                  {errors.description && (
                    <p className="ml-2 text-start text-sm text-red-600">
                      {errors.description.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <button
            type="submit"
            className="mt-4w-[50%] py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddApplication;
