const URL = "https://cidenet.herokuapp.com/api/v1/"

class UserServices {
    registerUser(user) {
        return fetch(URL + "registerUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
    }

    generateEmail(name, lastName, country) {
        return fetch(URL + "generateEmail?name=" + name + "&lastName=" + lastName + "&country=" + country, {
            method: "GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
    }

    getAllUsers() {
        return fetch(URL + "getAllUsers", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    editUser(users) {
        console.log(users);
        return fetch(URL + "editUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(users)
        })
    }

    deleteUser(documentNumber) {
        return fetch(URL + "deleteUser?documentNumber=" + documentNumber, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}

export default new UserServices();