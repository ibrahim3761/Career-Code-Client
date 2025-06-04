import React from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = useAuth();

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // process salary range data
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };

    // process requirements
    const requirementsString = newJob.requirements;
    const requirementsDirty = requirementsString.split(",");
    const requirementsClean = requirementsDirty.map((req) => req.trim());
    newJob.requirements = requirementsClean;
    console.log(requirementsDirty, requirementsClean);

    // process responsibilities
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());

    newJob.status = "active";
    // send to backend
    axios
      .post("https://career-code-server-wine.vercel.app/jobs", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "New Job added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(Object.keys(newJob).length);
  };

  return (
    <div className="min-h-screen flex justify-center items-start py-10 bg-base-100">
      <form onSubmit={handleAddJob} className="w-full max-w-3xl space-y-6">
        {/* Basic Info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Title</label>
          <input
            type="text"
            className="input input-bordered w-full"
            name="title"
            placeholder="Job title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            className="input input-bordered w-full"
            name="company"
            placeholder="Company"
          />

          <label className="label">Location</label>
          <input
            type="text"
            className="input input-bordered w-full"
            name="location"
            placeholder="Company Location"
          />

          <label className="label">Company Logo</label>
          <input
            type="text"
            className="input input-bordered w-full"
            name="company_logo"
            placeholder="Company Logo URL"
          />
        </fieldset>

        {/* Job Type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Job Type</legend>
          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              value="On-site"
              type="radio"
              name="jobType"
              aria-label="On-site"
            />
            <input
              className="btn"
              value="Remote"
              type="radio"
              name="jobType"
              aria-label="Remote"
            />
            <input
              className="btn"
              value="Hybrid"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
            />
          </div>
        </fieldset>

        {/* Job Category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Job Category</legend>
          <select
            defaultValue="Job Category"
            name="category"
            className="select select-bordered w-full"
          >
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>

        {/* Application Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
          <input
            type="date"
            name="applicationDeadline"
            className="input input-bordered w-full"
          />
        </fieldset>

        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Salary Range</legend>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <label className="label">Minimum Salary</label>
              <input
                type="number"
                className="input input-bordered w-full"
                name="min"
                placeholder="Minimum Salary"
              />
            </div>
            <div>
              <label className="label">Maximum Salary</label>
              <input
                type="number"
                className="input input-bordered w-full"
                name="max"
                placeholder="Maximum Salary"
              />
            </div>
            <div>
              <label className="label">Currency</label>
              <select
                defaultValue="Currency"
                name="currency"
                className="select select-bordered w-full"
              >
                <option disabled={true}>Currency</option>
                <option>bdt</option>
                <option>usd</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Job Description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea
            className="textarea w-full"
            name="description"
            placeholder="Job Description"
          ></textarea>
        </fieldset>

        {/* Job Requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>
          <textarea
            className="textarea w-full"
            name="requirements"
            placeholder="Job Requirements (Separated by comma)"
          ></textarea>
        </fieldset>

        {/* Job Responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea
            className="textarea w-full"
            name="responsibilities"
            placeholder="Job Responsibilities (Separated by comma)"
          ></textarea>
        </fieldset>

        {/* HR related Info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">HR Related Info</legend>

          <label className="label">HR Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            name="hr_name"
            placeholder="HR name"
          />

          <label className="label">HR Email</label>
          <input
            type="email"
            defaultValue={user.email}
            className="input input-bordered w-full"
            name="hr_email"
            placeholder="HR email"
          />
        </fieldset>

        <input type="submit" className="btn w-full" value="Add Job" />
      </form>
    </div>
  );
};

export default AddJob;
