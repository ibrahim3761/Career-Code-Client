import React, { use } from "react";
import JobApplicationsRow from "./JobApplicationsRow";

const ApplicationLists = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);
  console.log(applications);

  return (
    <div>
      <h3 className="text-4xl font-bold py-5">Apllied in {applications.length}</h3>
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Company Name</th>
              <th>LinkedIn</th>
              <th>Applicant Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                applications.map((application,index)=><JobApplicationsRow index={index} key={application._id} application={application}></JobApplicationsRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationLists;
