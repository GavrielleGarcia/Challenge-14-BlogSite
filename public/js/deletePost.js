const DeletePostFormHandler = async (event) => {
    event.preventDefault();
    
    const id = document.querySelector('#post-id');
    
    const response = await fetch("/api/post/" + id.value, {
        method: "DELETE"
    });
//Response when deliting a post
    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert('Unable to delete post');
    }

};
//Delete icon
document
    .querySelector('#btnDelete')
        .addEventListener('click', DeletePostFormHandler);