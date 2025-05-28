import React from "react";
import { Link, useLoaderData } from "react-router"; 
import { MapPin, Briefcase, Clock4, Mail, User } from "lucide-react";

const JobDetails = () => {
  const job = useLoaderData();

  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo,
  } = job;

  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <div className="bg-white p-6 md:p-10 rounded-xl shadow-md">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img src={company_logo} alt={company} className="w-16 h-16 object-contain rounded-md" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <Briefcase size={16} /> {company}
              </p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <span className="text-indigo-600 font-bold text-xl">
              {salaryRange?.currency === "bdt" ? "৳" : "$"}
              {salaryRange?.min} - {salaryRange?.max}
            </span>
            <p className="text-sm text-gray-500">per month</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-6">
          <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-md">
            <MapPin size={14} /> {location}
          </span>
          <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-md">
            <Clock4 size={14} /> Apply by {applicationDeadline}
          </span>
          <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-md">
            <Briefcase size={14} /> {jobType}
          </span>
          <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-md">
            🗂️ {category}
          </span>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Job Description</h3>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>

        {/* Requirements */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Requirements</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {requirements.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>
        </div>

        {/* Responsibilities */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {responsibilities.map((res, idx) => (
              <li key={idx}>{res}</li>
            ))}
          </ul>
        </div>

        {/* HR Contact */}
        <div className="border-t pt-4 mt-6 flex items-start gap-4 text-sm text-gray-700">
          <div className="flex items-center gap-1">
            <User size={16} /> <span className="font-medium">{hr_name}</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail size={16} /> <a href={`mailto:${hr_email}`} className="text-indigo-600 underline">{hr_email}</a>
          </div>
        </div>

        {/* Apply Button */}
        <div className="mt-8 text-center">
          <Link to={`/jobApply/${_id}`}>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Apply Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
