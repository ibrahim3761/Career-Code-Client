import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationLists from './ApplicationLists';
import useAuth from '../../Hooks/useAuth';
import { myApplicationsPromise } from '../../api/ApplicationsApi';


const MyApplications = () => {
    const {user} = useAuth();
    return (
        <div className="w-full items-center text-center">
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={'Loading...'}>
                <ApplicationLists myApplicationsPromise={myApplicationsPromise(user.email)}></ApplicationLists>
            </Suspense>
        </div>
    );
};

export default MyApplications;