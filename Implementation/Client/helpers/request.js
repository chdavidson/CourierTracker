const baseUrl = 'http://localhost:8080/'

class Request {

    // get(url) {
    //     return fetch(url)
    //         .then((res) => res.json());
    // }

    // delete(url) {
    //     return fetch(url, {
    //         method: "DELETE",
    //         headers: {'Content-Type': 'application/json'}
    //     })
    // }

    post(url, payload) {
        fetch(baseUrl+url, {
            method: "POST",
            headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
    }

    // patch(url, payload){
    //     return fetch(url, {
    //         method: "PUT",
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(payload)
    //     })
    // }


}


export default Request;
