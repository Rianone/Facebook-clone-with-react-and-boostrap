function FriendComponent(props) {
    return ( 
    <div className="col-2 me-1">
        <div className="card shadow">
            <img className="card-img-top" src={"https://reqres.in/img/faces/"+props.index+"-image.jpg"} alt="Title"/>
            <div className="card-body">
                <h5 class="card-title">Username</h5>
                <div className="card-miniature-container d-flex mb-2">
                    <img class="card-img-miniature" src="https://reqres.in/img/faces/1-image.jpg" alt="Title"/>
                    <img class="card-img-miniature" src="https://reqres.in/img/faces/2-image.jpg" alt="Title"/>
                    <span className="text-secondary">  12 mutual friends</span>
                </div>
                <button className="btn btn-block btn-primary w-100 mb-2">Confirm</button>
                <button className="btn btn-block btn-secondary w-100">Delete</button>
            </div>
        </div>
    </div>
     );
}

export default FriendComponent;