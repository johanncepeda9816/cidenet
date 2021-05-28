const URL = "http://localhost:8080/api/v1/"

class UserServices{
    registerUser(user){
        return fetch(URL + "registerUser", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
    }
}

export default new UserServices();