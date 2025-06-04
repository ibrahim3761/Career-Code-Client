import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const useJobApi = () => {
    const axiosSecure = useAxiosSecure();

    const myPostedJobsPromise = email =>{
        return axiosSecure.get(`/jobs/applications?email=${email}`).then(res=>res.data)
    }
    return {
        myPostedJobsPromise
};
};

export default useJobApi;