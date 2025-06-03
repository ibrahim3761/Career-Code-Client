import React, { Suspense } from 'react';
import useAuth from '../../Hooks/useAuth';
import JobList from './JobList';
import { myPostedJobsPromise } from '../../api/JobsApi';

const MyPostedJobs = () => {
    const {user} = useAuth();
    return (
        <div className="w-full items-center text-center">
            <Suspense fallback={'Loading..'}>
                <JobList myPostedJobsPromise={myPostedJobsPromise(user.email,user.accessToken)}></JobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;