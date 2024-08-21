import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Myapplication() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
  const { userData, loading, error } = useSelector((state) => state.user);
  const fetchMyjobs = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/jobs/fetchApplicationsOfUsers`,
        {
          id: userData?.result?.data?._id,
        }
      );
      if (response?.data?.data != null) {
        setJobs(response?.data?.data?.applications);
      }
      console.log(`ressss`, response.data);
    } catch (error) {
      console.log(error);
      setJobs([]);
    }
  };
  useEffect(() => {
    fetchMyjobs();
  }, []);

  return (
    <div>
      {isModalOpen && (
        <>
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <div className="flex items-center">
                <h3 className="text-lg font-bold text-start">
                  {selectedJob?.position}
                </h3>
                <p className="font-bold text-lg text-black">-</p>
                <p className="text-start text-black">{selectedJob?.contract}</p>
              </div>

              <p className="text-start">{selectedJob?.companyName}</p>
              <p className="text-start">{selectedJob?.location}</p>
              <p className="text-start font-bold">Description :</p>
              <p className="text-start">{selectedJob?.description}</p>
              <div>
                <p className="text-start text-black font-bold"> posted on: </p>
                <p className="text-start text-black">
                  {moment(selectedJob?.createdAt).format("Do MMMM YYYY")}
                </p>
              </div>

              <div className="flex justify-center items-center gap-10 py-5">
                {/* <button
                  className="btn w-[30%] bg-blue-700 text-white font-bold"
                  // onClick={() => {
                  //   handleApplyJob();
                  // }}
                >
                  Apply
                </button> */}
                <label
                  htmlFor="my_modal_7"
                  className="btn w-[30%] font-bold bg-blue-700 text-white text-lg "
                >
                  close
                </label>
              </div>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">
              Close
            </label>
          </div>
        </>
      )}
      <div className="flex flex-col justify-center items-center md:grid grid-cols-2 md:place-items-center  gap-10">
        {jobs?.length > 0 ? (
          jobs.map((data, index) => (
            <div className="card bg-white text-primary-content w-[100%]  shadow-md shadow-black">
              <div className="">
                <div className="flex items-center">
                  <h2 className="card-title text-black">{data?.position}</h2>
                  <p className="font-bold text-lg text-black">-</p>
                  <p className="text-start text-black">{data?.contract}</p>
                </div>

                <p className="text-black text-start">{data?.companyName}</p>
                <p className="text-start text-black">{data?.location}</p>

                <p className="text-start text-black">{data?.description}</p>
                <div className="justify-start items-end">
                  <p className="text-start text-black font-bold">
                    {" "}
                    posted on:{" "}
                  </p>
                  <p className="text-start text-black">
                    posted on: {moment(data?.createdAt).format("Do MMMM YYYY")}
                  </p>
                </div>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => {
                      setSelectedJob(data);
                      setIsModalOpen(true);
                    }}
                  >
                    <label
                      htmlFor="my_modal_7"
                      className="btn bg-blue-700 text-white"
                    >
                      View Application
                    </label>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div> No Applications Found</div>
        )}
      </div>
      {/* <label htmlFor="my_modal_7" className="btn">
    open modal
  </label> */}

      {/* Model */}
    </div>
  );
}

export default Myapplication;
