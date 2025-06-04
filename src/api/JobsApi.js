export const myPostedJobsPromise = (email,accessToken) =>{
    return fetch(`https://career-code-server-wine.vercel.app/jobs/applications?email=${email}`,{
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    }).then(res=>res.json());
}