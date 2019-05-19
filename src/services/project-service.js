// import { authHeader, getUser } from '../helpers';
// //import { projectConstants } from '../constants';
// import { history } from '../helpers';
// const config = {
//     apiUrl: "https://staging-api.funnelytics.io",
   
    
// };
// export const projectService = {
//     createProject,
//     getProject,
// };

// function getProject(projectId, name){
//     let user = getUser();
//     let token = user.access_token;
//     if(!user) return "";
//     let url = `${config.apiUrl}/project-events/${projectId}?include=project`;
//     const requestOptions = {
//         method: 'GET',
//         headers: { 'Authorization': `Bearer ${token}` } ,
//     };

//     return fetch(url, requestOptions)
//         .then(handleResponse)
//         .then(project => project);
// }
// function createProject(projectName) {
//     let user = getUser();
//     if(!user) return "";

//     const requestOptions = {
//         method: 'POST',
//         headers:{ 'x-auth-token': user.token } ,
//         body: JSON.stringify({ projectName })
//     };

//     return fetch(`${config.apiUrl}`, requestOptions)
//         .then(handleResponse)
//         .then(project => project);
// }

// function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//             if (response.status === 401) {
//                 // auto logout if 401 response returned from api
//                 //logout();
//                 window.location.reload(true);
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });
// }


// function createNeweEvent(projectId, eventData){
//     return dispatch => {
//         projectService.createNeweEvent(projectId)
//             .then(event => {
//                 dispatch(success(event));
//                 history.push('/projects/' + projectId.id + '/step-2/');
//             });
//     }

//     function success(event) { return { type: projectConstants.CREATE_EVENT, event } }
// }

