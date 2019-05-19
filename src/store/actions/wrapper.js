export default promise => (
    promise
        .then(handleResponse)
        .then((data) => {
console.log(data);
           return ({ data, error: null })
        })
        .catch(error => {
            console.log(error);
            error = !error.response
                ? 'network error'
                : error.response.data.message;
            return { error, data: null }
        })
);

function handleResponse(response) {
    return response.text().then(text => {
        console.log(test);
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                //logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
