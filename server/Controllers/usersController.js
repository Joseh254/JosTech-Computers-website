export function getallusers(request,response){
    response.send("getting all users")
}

export function getsingleuser(request,response){
response.send("getting a single user")
}

export function createuser(request,response){
    response.send("creating a user")
}

export function updateuser(request,response){
    response.send("updating a user")
}

export function deleteuser(request,response){
    response.send("deleting a user")
}