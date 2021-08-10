
const baseUrl = 'http://192.168.0.25:8080/'

class Request {

    // get(url) {
    //     return fetch(url)
    //         .then((res) => res.json());
    // }

    delete(url, id) {
        console.log("Delete request recieved on "+baseUrl+url+'/'+id);
        return fetch(baseUrl+url+'/'+id, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'}
        })
    }

    post(url, payload) {
        console.log("Payload successfully delivered to "+baseUrl+url);
        return fetch(baseUrl+url, {
            method: "POST",
            headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
    }

    patch(url, payload){
        console.log("Object at "+baseUrl+url+" update request sent successfully")
        return fetch(baseUrl+url, {
            method: "PUT",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
    }


}


export default Request;
