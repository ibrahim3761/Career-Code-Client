import React from "react";
import { MapPin, Clock4, Briefcase } from "lucide-react";
import { Link } from "react-router";

const JobsCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    description,
    company,
    company_logo,
    requirements,
    salaryRange,
  } = job;

  return (
    <div className="border border-gray-200 rounded-xl shadow-sm p-6 w-full max-w-sm bg-white flex flex-col justify-between">
      {/* Company Info */}
      <div className="flex items-center gap-4 mb-4">
        <img src={company_logo} alt={company} className="w-12 h-12 rounded-md object-contain" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{company}</h3>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <MapPin size={14} /> {location}
          </p>
        </div>
      </div>

      {/* Job Title */}
      <h2 className="text-xl font-bold text-gray-900 mb-1">{title}</h2>

      {/* Job Type and Time */}
      <div className="flex items-center text-gray-500 text-sm mb-3 gap-4">
        <span className="flex items-center gap-1">
          <Briefcase size={14} /> {jobType}
        </span>
        <span className="flex items-center gap-1">
          <Clock4 size={14} /> 4 minutes ago
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {description}
      </p>

      {/* Requirements */}
      <div className="flex flex-wrap gap-2 mb-4">
        {requirements.map((skill, i) => (
          <span
            key={i}
            className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-auto">
        <span className="text-indigo-600 font-bold text-lg">
          {salaryRange?.currency === "bdt" ? "৳" : "$"}
          {salaryRange?.max}/<span className="text-sm font-medium">Hour</span>
        </span>
        <Link to={`/job-details/${_id}`}><button className="bg-indigo-600 text-white cursor-pointer text-sm font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          Apply Now
        </button></Link>
      </div>
    </div>
  );
};

export default JobsCard;
