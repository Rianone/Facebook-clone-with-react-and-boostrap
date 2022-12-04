function Publication(props) {
    return ( 
    <div className="Publications mb-3">
        <div className="card shadow">
            <div className="row m-3">
                <div className="col-4">
                    <div className="d-flex">
                        <a><img src="https://reqres.in/img/faces/3-image.jpg" alt="Profile image" className="rounded-circle profile-image"/></a>
                        <div className="ms-3">
                            <div className="text-bold">Sarcasm</div>
                            <small className="text-secondary text-bold">Username .<span>{props.index}h . <i className="bx bxs-planet bx-sm earth-icon"></i></span></small>
                        </div>
                    </div>
                </div>
                <div className="col-7 text-center d-flex justify-content-end">
                    <a href="#" className="text-secondary m-2 ms-5"><i className="bx bx-dots-horizontal-rounded bx-sm"></i></a>
                </div>
            </div>
            <div className="col-12 m-2 ms-3">
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
            <img src={"https://picsum.photos/700/550?random="+props.index} alt="Publication image" className="img img-responsive"/>

            <div className="row m-2">
                <div className="col-3">
                    <span className='text-secondary'><a href="#" className='me-2'>😆😢❤️</a> {props.index}</span>
                </div>
                <div className="col-9 d-flex justify-content-end mb-3">
                    <span className=''><a href="#" className='me-2 text-secondary'>{props.index} Comments</a></span>
                    <span className='text-secondary'><a href="#" className='me-2 text-secondary'>{props.index} Shares</a></span>
                </div>
                <hr />
            </div>

            <div className="row ms-5">
                <div className="col-4 d-flex">
                    <i className="bx bx-like bx-sm me-2 text-secondary"></i>
                    <h5 className="text-secondary">Like</h5>
                </div>
                 <div className="col-4 d-flex">
                    <i className="bx bx-comment bx-sm me-2 text-secondary"></i>
                    <h5 className="text-secondary">Comment</h5>
                </div>
                 <div className="col-4 d-flex">
                    <i className="bx bx-share bx-sm me-2 text-secondary"></i>
                    <h5 className="text-secondary">Share</h5>
                </div>
            </div>
            <hr />

            <div className="row m-2 ">
                <div className="col-1">
                    <a><img src="./images/profile_img.jpg" alt="Profile image" className="rounded-circle profile-image"/></a>
                </div>
                <div className="col-11">
                    <input type="text" className='form-control rounded-5 bgprimary' placeholder="Write a public comment" />
                    <small>Press Enter to post</small>
                </div>
            </div>

            <div className="row m-2">
                <div className="col-1">
                    <a><img src="https://reqres.in/img/faces/5-image.jpg" alt="Profile image" className="rounded-circle profile-image"/></a>
                </div>
                <div className="col-11">
                    <div className="rounded-5 bgprimary p-3 ps-4"> <div className="text-bold">John Doe</div> Lorem ipsum dolor sit amet consectetur adipisicing elit.🤣🤣</div>
                    <div className="col-12 d-flex">
                        <small><a href="#" className="text-secondary me-2">Like</a></small>
                        <small><a href="#" className="text-secondary me-2">Reply</a></small>
                        <small><a href="#" className="text-secondary me-2">Share</a></small>
                        <small><a href="#" className="text-secondary me-2">3 d</a></small>
                        <small><a href="#" className="text-secondary me-2">edited</a></small>
                    </div>
                </div>
            </div>
           
            <div className="row m-4">
                <div className="col-10 text-bold text-secondary">View all comments</div>
                <div className="col-2"><a href="#" className='text-secondary'>1 of {props.index}</a></div>
            </div>
        </div>
    </div>
     );
}

export default Publication;