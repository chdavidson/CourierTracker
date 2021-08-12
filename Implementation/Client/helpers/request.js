
const baseUrl = 'http://172.19.29.14:8080/'

class Request {

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
