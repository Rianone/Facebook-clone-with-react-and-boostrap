import Scrollbar from "react-scrollbars-custom";
import Home from "./Home";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import LeftComponent from "../components/LeftComponent";
import {useState} from 'react'
import Contact from "../components/Contact";

function Main() {

    const [seeMore, setSeeMore] = useState(false);
   
    const [contacts, setContacts] = useState([
        {"id":2,"first_name":"Sheldon","last_name":"Quigley","avatar":"https://reqres.in/img/faces/1-image.jpg"}
        ,{"id":3,"first_name":"Terrill","last_name":"Hills","avatar":"https://reqres.in/img/faces/2-image.jpg"},
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }])  
    var contactList;
   
    contactList = contacts.map((contact)=>{
        return <Contact image={contact.avatar} key={contact.id} text={contact.first_name +" "+ contact.last_name}></Contact>
    })
   

    return ( 
        <div className="container-fluid main-container">
              <div className="row">

                 <div className="col-3 pt-4 left-container me-5">
                 <Scrollbar>
                        <div className="col-lg-9 col-md-12 left-container-content">
                            <LeftComponent image="./images/profile_img.jpg" text="Username"></LeftComponent>
                            <LeftComponent image="./images/left_img1.png" text="Friends"></LeftComponent>
                            <LeftComponent image="./images/left_img2.png" text="Groups"></LeftComponent>
                            <LeftComponent image="./images/left_img3.png" text="Marketplace"></LeftComponent>
                            <LeftComponent image="./images/left_img4.png" text="Watch"></LeftComponent>
                            <LeftComponent image="./images/left_img5.png" text="Memories"></LeftComponent>
                            <LeftComponent image="./images/left_img6.png" text="Saved"></LeftComponent>
                            <LeftComponent image="./images/left_img7.png" text="Pages"></LeftComponent>
                            <LeftComponent image="./images/left_img9.png" text="Most recent"></LeftComponent>
                            <LeftComponent image="./images/left_img10.png" text="Favorites"></LeftComponent>
                            { !seeMore?
                            <a  onClick={()=>{
                                        setSeeMore(true)
                                    }}>
                                <div className="d-flex left-box-element ps-2 pt-2 pb-2 rounded">
                                    <a class="nav-link me-4 ms-1"><i className=" bgprimary bx bx-chevron-down bx-sm bx-border-circle color-black"></i></a>
                                    <span className="align-self-center">See more</span>
                                </div>
                            </a>
                            : null
                            }

                            { seeMore?
                            <>
                            <LeftComponent image="./images/left_img8.png" text="Events"></LeftComponent>
                            <LeftComponent image="./images/left_img11.png" text="Recent Ad Activity"></LeftComponent>
                            <LeftComponent image="./images/left_img12.png" text="Climate Science Center"></LeftComponent>
                            <LeftComponent image="./images/left_img13.png" text="Fundraisers"></LeftComponent>
                            <LeftComponent image="./images/left_img14.png" text="COVID-19 Information Centre"></LeftComponent>
                            <LeftComponent image="./images/left_img15.png" text="Ad Centre"></LeftComponent>
                            <LeftComponent image="./images/left_img16.png" text="Facebook Pay"></LeftComponent>
                            <LeftComponent image="./images/left_img17.png" text="Ad Manager"></LeftComponent>
                            <LeftComponent image="./images/left_img18.png" text="Play Games"></LeftComponent>
                            <LeftComponent image="./images/left_img19.png" text="Messenger"></LeftComponent>
                            <LeftComponent image="./images/left_img20.png" text="Messenger Kids"></LeftComponent>
                            <LeftComponent image="./images/left_img21.png" text="Emotional Health"></LeftComponent>
                            <LeftComponent image="./images/left_img22.png" text="Crisis service"></LeftComponent>
                            <LeftComponent image="./images/left_img23.png" text="Gaming Videos"></LeftComponent>
                            <LeftComponent image="./images/left_img24.png" text="Live Videos"></LeftComponent>
                            <a onClick={()=>{
                                        setSeeMore(false)
                                    }}>
                            <div className="d-flex left-box-element ps-2 pt-2 pb-2 rounded">
                                    <a class="nav-link me-4 ms-1"><i className=" bgprimary bx bx-chevron-up bx-sm bx-border-circle color-black"></i></a>
                                    <span className="align-self-center">See less</span>
                            </div>
                            </a>
                            </>
                            : null
                            }


                            <div className="bottom">
                                <small > 
                                    <a href="#" className="link text-secondary">Privacy .</a>
                                    <a href="#" className="link text-secondary">Terms .</a>
                                    <a href="#" className="link text-secondary">Advertising .</a>
                                    <a href="#" className="link text-secondary">Ad choices .</a>
                                    <a href="#" className="link text-secondary">Cookies</a>
                                </small>
                                <p>
                                <small>
                                    <a href="#" className="link text-secondary">More</a>
                                    <a href="#" className="link text-secondary">Meta © 2022</a>
                                </small>
                                </p>
                            </div>
                        </div>
                        
                </Scrollbar>
                 </div>
                {/* <div className="col-lg-1 col-md-0"></div> */}
                
                <div className="col-5 ms-5 actual-page-container mt-4">
                        <Home></Home>
                 </div>

                 <div className="col-lg-1 col-md-0"></div>

                 <div className="col-3 mt-3">
                    <div className="row">
                        <div className="col-7">
                            <h5 className="text-secondary">Contacts</h5>
                        </div>

                        <div className="col-5 d-flex justify-content-end">
                        <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 150, hide: 150 }}
                        overlay={<Tooltip id="button-tooltip">New room</Tooltip>}
                        >
                            <a href="#" className="me-3 text-secondary"><i className="bx bxs-camera-movie bx-sm"></i></a>
                        </OverlayTrigger>
                        
                        <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 150, hide: 150 }}
                        overlay={<Tooltip id="button-tooltip">Search for a name or group</Tooltip>}
                        >
                            <a href="#" className="me-3 text-secondary"><i className="bx bx-search bx-sm"></i></a>
                        </OverlayTrigger>
                        <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 150, hide: 150 }}
                        overlay={<Tooltip id="button-tooltip">Options</Tooltip>}
                        >
                            <a href="#" className=" text-secondary"><i className="bx bx-dots-horizontal-rounded bx-sm"></i></a>
                        </OverlayTrigger>

                        </div>
                    </div>
                    
                    {contactList}

                    <h5 className="text-secondary mt-3">Group conversations</h5>
                    <a>
                        <div className="d-flex left-box-element ps-2 pt-2 pb-2 rounded">
                            <i className="bgprimary bx bx-plus bx-sm bx-border-circle color-black me-2"></i>
                            <span className="align-self-center">Create New Group</span>
                        </div>
                    </a>
                    
                 </div>
              </div>
           </div>
     );
}

export default Main;