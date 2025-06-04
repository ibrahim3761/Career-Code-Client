import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationLists from './ApplicationLists';
import useAuth from '../../Hooks/useAuth';
import useApplicationApi from '../../api/useApplicationApi';


const MyApplications = () => {
    const {user} = useAuth();
    const {myApplicationsPromise} = useApplicationApi();
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