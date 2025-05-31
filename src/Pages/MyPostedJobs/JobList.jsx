import React, { use } from "react";
import { Link } from "react-router";

const JobList = ({ myPostedJobsPromise }) => {
  const jobs = use(myPostedJobsPromise);
  return (
    <div>
      <h3 className="text-4xl font-bold py-5">Job Posted {jobs.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Application Deadline</th>
              <th>Application Count</th>
              <th>View Applications</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                jobs.map((job, index)=><tr key={job._id}>
              <th>{index+1}</th>
              <td>{job.title}</td>
              <td>{job.applicationDeadline}</td>
              <td>{job.application_Count}</td>
              <td><Link to={`/applications/${job._id}`}>View Applications</Link></td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
