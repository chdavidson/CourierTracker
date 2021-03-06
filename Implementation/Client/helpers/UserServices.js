const baseURL = 'http://192.168.1.181:8080/'

const UserServices = {

    getUsers() {
        return(baseURL + "users/")
            .then(res => res.json())
    },

    getSingleUser(id) {
        return(baseURL + "users/" + id)
            .then(res => res.json())
    },

    postUser(payload) {
        return fetch(baseURL + "users/", {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        })
            .then(res => res.json())
    },
    deleteShop(id) {
        return fetch(baseURL + "users/" + id, {
            method: 'DELETE'
        })
    },

}