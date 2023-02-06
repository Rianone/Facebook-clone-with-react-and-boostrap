import Scrollbar from "react-scrollbars-custom";

function Reels() {
    return (
      <div className="Reels">
        <Scrollbar>
          <div className="row">
            <div className="col-3">
              <div className="card rounded-5 bgprimary">
                <div className="img-card-con">
                  <img
                    className="card-img-top"
                    src="https://images.pexels.com/photos/7034723/pexels-photo-7034723.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    alt="Title"
                  />
                </div>
                <div className="card-body text-center">
                  <p className="card-text">
                    <i className="bx bxs-right-arrow"></i> 6.5k
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card rounded-5 bgprimary">
                <div className="img-card-con">
                  <img
                    className="card-img-top"
                    src="https://images.pexels.com/photos/7034723/pexels-photo-7034723.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    alt="Title"
                  />
                </div>
                <div className="card-body text-center">
                  <p className="card-text">
                    <i className="bx bxs-right-arrow"></i> 6.5k
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card rounded-5 bgprimary">
                <div className="img-card-con">
                  <img
                    className="card-img-top"
                    src="https://images.pexels.com/photos/7034723/pexels-photo-7034723.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    alt="Title"
                  />
                </div>
                <div className="card-body text-center">
                  <p className="card-text">
                    <i className="bx bxs-right-arrow"></i> 6.5k
                  </p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="card rounded-5 bgprimary">
                <div className="img-card-con">
                  <img
                    className="card-img-top"
                    src="https://images.pexels.com/photos/7034723/pexels-photo-7034723.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    alt="Title"
                  />
                </div>
                <div className="card-body text-center">
                  <p className="card-text">
                    <i className="bx bxs-right-arrow"></i> 6.5k
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Scrollbar>
      </div>
    );
}

export default Reels;