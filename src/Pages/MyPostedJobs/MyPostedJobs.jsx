import React, { Suspense } from 'react';
import useAuth from '../../Hooks/useAuth';
import JobList from './JobList';
import useJobApi from '../../api/useJobApi';


const MyPostedJobs = () => {
    const {user} = useAuth();
    const {myPostedJobsPromise} = useJobApi();
    return (
        <div className="w-full items-center text-center">
            <Suspense fallback={'Loading..'}>
                <JobList myPostedJobsPromise={myPostedJobsPromise(user.email)}></JobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;