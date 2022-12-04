function Video() {
    return ( 
        <div className="card shadow mb-3">
        <div className="row m-3">
            <div className="col-4">
                <div className="d-flex">
                    <a><img src="https://reqres.in/img/faces/3-image.jpg" alt="Profile image" className="rounded-circle profile-image"/></a>
                    <div className="ms-3">
                        <div className="text-bold">Sarcasm</div>
                        <small className="text-secondary text-bold">Username .<span>10h . <i className="bx bxs-planet bx-sm earth-icon"></i></span></small>
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
        <video src="https://player.vimeo.com/external/269971860.sd.mp4?s=a3036bd1a9f15c1b31daedad98c06a3b24cdd747&profile_id=164&oauth2_token_id=57447761" controls className="video"></video>

        <div className="row m-2">
            <div className="col-3">
                <span className='text-secondary'><a href="#" className='me-2'>😆😢❤️</a>5</span>
            </div>
            <div className="col-9 d-flex justify-content-end mb-3">
                <span className=''><a href="#" className='me-2 text-secondary'>4 Comments</a></span>
                <span className='text-secondary'><a href="#" className='me-2 text-secondary'>5 Shares</a></span>
            </div>
            <hr />
        </div>

        <div className="row ms-5 mb-3">
            <div className="ms-5 row">
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
        </div>

       
    </div>
     );
}

export default Video;