import React, { use } from 'react';
import JobsCard from '../Shared/JobsCard';

const HotJobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise)
    return (
        <div className='w-full px-4 md:px-6 md:pl-14'>
            <h2 className="text-3xl font-bold mb-6 text-center">Hot Job</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    jobs.map(job => <JobsCard key={job._id} job={job}></JobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;