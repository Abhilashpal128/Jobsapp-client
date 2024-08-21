import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath == "/AllJobsAdmin");

  const { userData } = useSelector((state) => state?.user);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        {userData?.result?.data?.isAdmin ? (
          <button
            className="btn bg-blue-700 text-white font-bold"
            onClick={() => navigate("/AddApplication")}
          >
            Add Application
          </button>
        ) : (
          <a className="btn btn-ghost text-xl">Job App</a>
        )}
      </div>
      <div className="flex-none gap-2">
        {userData?.result?.data?.isAdmin ? (
          currentPath == "/AllJobsAdmin" ? (
            <button
              className="btn bg-blue-700 text-white font-bold"
              onClick={() => navigate("/home")}
            >
              Back To Home
            </button>
          ) : (
            <button
              className="btn bg-blue-700 text-white font-bold"
              onClick={() => navigate("/AllJobsAdmin")}
            >
              View All jobs
            </button>
          )
        ) : currentPath == "/MyApplications" ? (
          <button
            className="btn bg-blue-700 text-white font-bold"
            onClick={() => navigate("/home")}
          >
            Back To Home
          </button>
        ) : (
          <button
            className="btn bg-blue-700 text-white font-bold"
            onClick={() => navigate("/MyApplications")}
          >
            View Applications
          </button>
        )}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content w-8 rounded-full">
                <span className="text-xs">
                  {userData?.result?.data?.firstName?.slice(0, 1)}
                </span>
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>
                <button
                  onClick={() => {
                    navigate("/MyApplications");
                  }}
                >
                  my Applications
                </button>
              </a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
