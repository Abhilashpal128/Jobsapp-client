import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function AllJobsAdmin() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
  const { userData, loading, error } = useSelector((state) => state.user);
  console.log(`userData`, userData);
  console.log(userData?.result?.data?.tokens[0]);

  const fetchAllJobs = async () => {
    try {
      const response = await axios.get(`${API_URL}/jobs/allJobs`, {
        headers: {
          Authorization: userData?.result?.data?.tokens[0]?.token, // Replace `yourToken` with your actual token
        },
      });
      if (response?.data?.data != null) {
        setJobs(response?.data?.data);
      }
      console.log(`ressss`, response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllJobs();
  }, []);

  const handleDeleteJob = async (data) => {
    try {
      const response = await axios.delete(
        `${API_URL}/jobs/delete/${userData?.result?.data?._id}/${data?._id}`
      );
      if (response?.data?.status == 200) {
        alert("Job deleted successfully");
        fetchAllJobs();
      } else {
        alert("only admin can delete jobs");
      }
    } catch (error) {
      console.log(`erro`, error);
    }
  };
  return (
    <div>
      {/* {isModalOpen && (
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

              <div className="flex justify-center items-center gap-10 py-5">
                <button
                  className="btn w-[30%] bg-blue-700 text-white font-bold"
                  onClick={() => {
                    handleApplyJob();
                  }}
                >
                  Apply
                </button>
                <label htmlFor="my_modal_7" className="btn w-[30%] font-bold">
                  close
                </label>
              </div>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">
              Close
            </label>
          </div>
        </>
      )} */}
      {deleteModal && (
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

              <div className="flex justify-center items-center gap-10 py-5">
                <button
                  className="btn w-[30%] bg-red-700 text-white font-bold"
                  onClick={() => {
                    // handleDeleteJob();
                  }}
                >
                  Delete
                </button>
                <label htmlFor="my_modal_7" className="btn w-[30%] font-bold">
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
      {jobs.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Date</th>
                <th>Job</th>
                <th>Company</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs?.map((data, index) => (
                <tr>
                  <th>{parseInt(index) + 1}</th>
                  <td>{moment(data?.createdAt).format("Do MMMM YYYY")}</td>
                  <td>{data?.position}</td>
                  <td>{data?.companyName}</td>
                  <td className=" flex  w-60">
                    <button
                      className="btn w-[30%] bg-blue-700 text-white font-bold"
                      //   onClick={() => {
                      //     // handleApplyJob();
                      //   }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn w-[30%] bg-red-700 text-white font-bold"
                      onClick={() => {
                        handleDeleteJob(data);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>No jobs found</div>
      )}
    </div>
  );
}

export default AllJobsAdmin;

{
  /* <tr>
<th>3</th>
<td>Brice Swyre</td>
<td>Tax Accountant</td>
<td>Red</td>
</tr> */
}
