export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        console.log(user.token);

        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}

export function getUser(){
    let user = JSON.parse(localStorage.getItem('user'));
    return user;

}