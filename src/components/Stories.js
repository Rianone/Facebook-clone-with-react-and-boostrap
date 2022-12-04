import Scrollbar from "react-scrollbars-custom";
import LeftComponent from "./LeftComponent";

function Stories() {
    return ( 
        <div className="Stories">
            <div className="row">
                <div className="col-3">
                    <div class="card rounded-5">
                        <div className="img-card-con">
                            <img class="card-img-top" src="./images/profile_img.jpg" alt="Title"/>
                        </div>
                        <div class="card-body text-center">
                          <span className="story-circle-add">
                             <i className="bx bx-plus bg-primary bx-sm text-white bx-border-circle "></i>
                          </span>
                            <p class="card-text mb-3">Create Story</p>
                        </div>
                    </div>
                </div>   

                <div className="col-3">
                <div className="card-image-con">
                    <img src="https://reqres.in/img/faces/7-image.jpg" alt="Left info image" className="rounded-circle left-image card-image-logo"/>
                </div>
                <div class="card rounded-5">
                 <div className="img-card-con">
                        <img class="card-img-top" src="https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Title"/>
                 </div>
                <div class="card-body text-center">
                            <p class="card-text">Universal Love</p>
                </div>
                </div>
                </div>   


                <div className="col-3">
                 <div className="card-image-con">
                    <img src="https://reqres.in/img/faces/8-image.jpg" alt="Left info image" className="rounded-circle left-image card-image-logo"/>
                </div>
                <div class="card rounded-5">
                        <img class="card-img-top" src="https://images.pexels.com/photos/1170576/pexels-photo-1170576.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Title"/>
                <div class="card-body text-center">
                            <p class="card-text">John Doe</p>
                </div>
                </div>
                </div>   

                
                <div className="col-3">
                <div className="card-image-con">
                    <img src="https://reqres.in/img/faces/9-image.jpg" alt="Left info image" className="rounded-circle left-image card-image-logo"/>
                </div>
                <div class="card rounded-5">
                        <img class="card-img-top" src="https://images.pexels.com/photos/587958/pexels-photo-587958.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Title"/>
                <div class="card-body text-center">
                            <p class="card-text">Tarmac</p>
                </div>
                </div>
                </div>  
                
            </div>
        </div>
     );
}

export default Stories;