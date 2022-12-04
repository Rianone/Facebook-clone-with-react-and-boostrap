import "../css/profile.css"
import LeftComponent from "../components/LeftComponent"
import {useState, useEffect} from "react"
import Scrollbar from "react-scrollbars-custom";
import Home from "../ProfilePages/Home";
import Friends from "../ProfilePages/Friends";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Watch from "../ProfilePages/Watch";
import Marketplace from "../ProfilePages/Marketplace";
import Groups from "../ProfilePages/Groups";
import Popover from 'react-bootstrap/Popover';
import filterList from "../components/FilteredLeftComponent";
import LeftFilterComponent from "../components/LeftFilterComponent";
import LeftMenuComponent from "../components/LeftMenuComponent";
import Contact from "../components/Contact";
import Posts from "../components/Posts";
import ProfileMenuComponent from "../components/ProfileMenuComponent";


function NavbarGlobal(props) {
    const [activePage, setActivePage] = useState("Home");
    const [activeMenu, setActiveMenu] = useState("");
    const [filterMenu, setFilterMenu] = useState("");
    const [filterContact, setFilterContact] = useState("");
    const [filteredList, setFilteredList] = useState(filterList)

    function actual(page){
        if(page == "Home"){
            return <Home></Home>
        }
        else if(page == "Friends"){
            return <Friends></Friends>
        }
        else if(page == "Watch"){
            return <Watch></Watch>
        }
        else if(page == "Marketplace"){
            return <Marketplace></Marketplace>
        }
        else if(page == "Groups"){
            return <Groups></Groups>
        }
        
    }

    const [posts, setPosts] = useState(
        [{"id":1,"title":"His mother had always taught him","body":"His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.","userId":9,"tags":["history","american","crime"],"reactions":2},{"id":2,"title":"He was an expert but not in a discipline","body":"He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.","userId":13,"tags":["french","fiction","english"],"reactions":2},{"id":3,"title":"Dave watched as the forest burned up on the hill.","body":"Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.","userId":32,"tags":["magical","history","french"],"reactions":5},{"id":4,"title":"All he wanted was a candy bar.","body":"All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.","userId":12,"tags":["mystery","english","american"],"reactions":1},{"id":5,"title":"Hopes and dreams were dashed that day.","body":"Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.","userId":41,"tags":["crime","mystery","love"],"reactions":2},{"id":6,"title":"Dave wasn't exactly sure how he had ended up","body":"Dave wasn't exactly sure how he had ended up in this predicament. He ran through all the events that had lead to this current situation and it still didn't make sense. He wanted to spend some time to try and make sense of it all, but he had higher priorities at the moment. The first was how to get out of his current situation of being naked in a tree with snow falling all around and no way for him to get down.","userId":47,"tags":["english","classic","american"],"reactions":3},{"id":7,"title":"This is important to remember.","body":"This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.","userId":12,"tags":["magical","crime"],"reactions":0},{"id":8,"title":"One can cook on and with an open fire.","body":"One can cook on and with an open fire. These are some of the ways to cook with fire outside. Cooking meat using a spit is a great way to evenly cook meat. In order to keep meat from burning, it's best to slowly rotate it.","userId":31,"tags":["american","english"],"reactions":9},{"id":9,"title":"There are different types of secrets.","body":"There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did.","userId":42,"tags":["american","history","magical"],"reactions":2},{"id":10,"title":"They rushed out the door.","body":"They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all.","userId":1,"tags":["fiction","magical","history"],"reactions":4}]
    )

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
    
        const [filteredContactList, setFilteredContactList] = useState([...contacts, ...contacts])
        var contactList;
        var postList;

        // contactList = contacts.map((contact)=>{
        //     return <Contact image={contact.avatar} key={contact.id} text={contact.first_name +" "+ contact.last_name}></Contact>
        // })
    
        postList = posts.map((post)=>{
            return <Posts text={post.title} info={post.body.slice(0,60)} index={post.id}></Posts>
        })

    return ( 
        <nav class="navbar navbar-expand-md shadow ">
              <div class="container-fluid justify-contrnt-between">
                <div className="d-flex">
                <a class="navbar-brand" href="#"><img src="./images/facebook_logo2.png" alt="facebook-logo" /></a>
                <form class="d-flex my-2 my-lg-0">
                    <div class="input-group">
                        <span class="input-group-text search search-icon"><i class="fa fa-search" aria-hidden="true"></i></span>
                        <input type="search" class="form-control bgsecondary search" placeholder="Research on facebook"/>
                    </div>
                </form>
                </div>

                <div class="middle-nav">
                    <ul class="navbar-nav me-5 mt-2 mt-lg-0">
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 150, hide: 150 }}
                        overlay={<Tooltip id="button-tooltip">Home</Tooltip>}
                    >
                        <li class="nav-item">
                            <a class={activePage=="Home"?"nav-link pe-5 ps-5 active": "nav-link pe-5 ps-5"} onClick={()=>{
                                props.setActualPage("Home")
                                setActivePage("Home")
                            }}><i className="bx bxs-home bx-sm"></i></a>
                        </li> 
                    </OverlayTrigger>

                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 150, hide: 150 }}
                        overlay={<Tooltip id="button-tooltip">Friends</Tooltip>}
                    >
                        <li class="nav-item">
                            <a class={activePage=="Friends"?"nav-link pe-5 ps-5 active": "nav-link pe-5 ps-5"}  onClick={()=>{
                                setActivePage("Friends")
                                props.setActualPage("Friends")
                            }}><i className="bx bx-group bx-sm"></i></a>
                        </li> 
                    </OverlayTrigger>

                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 150, hide: 150 }}
                        overlay={<Tooltip id="button-tooltip">Watch</Tooltip>}
                    >
                        <li class="nav-item">
                            <a class={activePage=="Watch"?"nav-link pe-5 ps-5 active": "nav-link pe-5 ps-5"} onClick={()=>{
                                props.setActualPage("Watch")
                                setActivePage("Watch")
                            }}><i className="bx bx-slideshow bx-sm"></i></a>
                        </li>
                    </OverlayTrigger>

                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 150, hide: 150 }}
                        overlay={<Tooltip id="button-tooltip">Marketplace</Tooltip>}
                    >
                        <li class="nav-item">
                            <a class={activePage=="Marketplace"?"nav-link pe-5 ps-5 active": "nav-link pe-5 ps-5"} onClick={()=>{
                                props.setActualPage("Marketplace")
                                setActivePage("Marketplace")
                            }}><i className="bx bx-store bx-sm"></i></a>
                        </li>
                    </OverlayTrigger>
                    
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 150, hide: 150 }}
                        overlay={<Tooltip id="button-tooltip">Groups</Tooltip>}
                    >
                        <li class="nav-item"> 
                            <a class={activePage=="Groups"?"nav-link pe-5 ps-5 active": "nav-link pe-5 ps-5"} onClick={()=>{
                                props.setActualPage("Groups")
                                setActivePage("Groups")
                            }}><i className="bx bxs-group bx-sm"></i></a>
                        </li>
                    </OverlayTrigger> 
                    </ul>
                </div>
                
                <div class="" >
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                      <OverlayTrigger trigger="click" placement="bottom" show={activeMenu=="Menu"} overlay={
                            <Popover id="popover-basic" bsPrefix="Menu-bsbody shadow">
                            <Popover.Header as="h1" bsPrefix="Menu-bsheader">Menu</Popover.Header>
                                <Scrollbar>
                            <Popover.Body >
                              <div className="row d-flex">
                                <div className="col-8 border p-3 ms-4">
                                    <div class="input-group">
                                         <span class="input-group-text search search-icon"><i class="fa fa-search" aria-hidden="true"></i></span>
                                         <input type="text " class="form-control bgsecondary search" placeholder="Research on facebook" onChange={(e)=>{
                                            setFilterMenu(e.target.value)
                                            if(filterMenu.trim().length>0){
                                                var filtered = filterList.filter((component)=>{
                                                return component.name.trim().toLowerCase().includes(filterMenu.trim().toLowerCase())})
                                                setFilteredList(filtered)
                                            }
                                            else{
                                                setFilteredList(filterList)
                                            }
                                         }} />
                                         
                                         <div className="container mt-2">
                                         {filteredList.map((compo)=>{
                                             return <LeftFilterComponent text={compo.name} image={compo.image} desc={compo.desc}></LeftFilterComponent>
                                         })}
                                         </div>
                                    </div>

                                </div>
                                <div className="col-4 border bs-body-row">
                                    <h1 className="Menu-bsheader">Create</h1>
                                    <div className="col">
                                        <LeftMenuComponent icon="bx bxs-edit bx-sm me-2 text-secondary bx-border-circle" text="Post"></LeftMenuComponent>
                                        <LeftMenuComponent icon="bx bxs-book-open bx-sm me-2 text-secondary bx-border-circle" text="Story"></LeftMenuComponent>
                                        <LeftMenuComponent icon="bx bxs-video-plus bx-sm me-2 text-secondary bx-border-circle" text="Room"></LeftMenuComponent>
                                        <hr />
                                        <LeftMenuComponent icon="bx bxs-flag bx-sm me-2 text-secondary bx-border-circle" text="Page"></LeftMenuComponent>
                                        <LeftMenuComponent icon="bx bxs-megaphone bx-sm me-2 text-secondary bx-border-circle" text="Ad"></LeftMenuComponent>
                                        <LeftMenuComponent icon="bx bxs-group bx-sm me-2 text-secondary bx-border-circle" text="Group"></LeftMenuComponent>
                                        <LeftMenuComponent icon="bx bxs-book-add bx-sm me-2 text-secondary bx-border-circle" text="Event"></LeftMenuComponent>
                                        <LeftMenuComponent icon="bx bxs-shopping-bag bx-sm me-2 text-secondary bx-border-circle" text="Market Listing"></LeftMenuComponent>
                                    </div>
                                </div>
                              </div>
                            </Popover.Body>
                              </Scrollbar>
                          </Popover>
                      }>
                        <li class="nav-item">
                            <a class={activeMenu=="Menu"?"nav-link active-menu": "nav-link"} onClick={()=>{
                                if(activeMenu == "Menu")
                                setActiveMenu("")
                                else
                                setActiveMenu("Menu")
                            }}><i className="bgprimary bx bxs-grid bx-sm bx-border-circle color-black"></i></a>
                        </li> 
                     </OverlayTrigger>
                    
                     <OverlayTrigger trigger="click" placement="bottom" show={activeMenu=="Messenger"} overlay={
                            <Popover id="popover-basic">
                            <Popover.Header as="h1" bsPrefix="Messenger-bsheader"><div className="row">
                                <div className="col-5">Chats</div>
                                <div className="col-7">
                                    <a href="#" className="text-secondary m-2"><i className="bx bx-dots-horizontal-rounded bx-sm"></i></a>
                                    <a href="#" className="text-secondary m-2"><i className="bx bx-expand bx-sm"></i></a>
                                    <a href="#" className="text-secondary m-2"><i className="bx bx-video-plus bx-sm"></i></a>
                                    <a href="#" className="text-secondary m-2"><i className="bx bx-edit bx-sm"></i></a>
                                </div>
                            </div>  
                            </Popover.Header>
                            <Popover.Body bsPrefix="Messenger-bsbody">
                            <Scrollbar>
                                <div className="input-group p-2">
                                <span class="input-group-text search search-icon"><i class="fa fa-search" aria-hidden="true"></i></span>
                                         <input type="search" class="form-control bgsecondary search" placeholder="Research on facebook" onInput={(e)=>{
                                             setFilterContact(e.target.value)
                                             if(e.target.value != ""){
                                                 var filteredContact = filteredContactList.filter((component)=>{
                                                    return component.first_name.trim().toLowerCase().includes(filterContact.trim().toLowerCase()) || component.last_name.trim().toLowerCase().includes(filterContact.trim().toLowerCase())
                                                 })
                                                 setFilteredContactList(filteredContact)
                                             }
                                             else{
                                                     setFilteredContactList(contacts)
                                             }
                                         }} />
                                </div>
                               {
                                     filteredContactList.map((contact)=>{
                                            return <Contact image={contact.avatar} key={contact.id} text={contact.first_name +" "+ contact.last_name}></Contact>
                                    })
                               }
                            </Scrollbar>
                            </Popover.Body>
                          </Popover>
                      }>
                        <li class="nav-item"> 
                            <a class={activeMenu=="Messenger"?"nav-link active-menu": "nav-link"} onClick={()=>{
                                if(activeMenu == "Messenger")
                                setActiveMenu("")
                                else
                                setActiveMenu("Messenger")
                            }}><i className=" bgprimary bx bxl-messenger bx-sm bx-border-circle color-black"></i></a>
                        </li> 
                    </OverlayTrigger>

                    <OverlayTrigger trigger="click" placement="bottom" show={activeMenu=="Notifications"}  overlay={
                            <Popover id="popover-basic">
                           <Popover.Header as="h1" bsPrefix="Messenger-bsheader"><div className="row">
                                <div className="col-9">Notifications</div>
                                <div className="col-3">
                                    <a href="#" className="text-secondary m-2"><i className="bx bx-dots-horizontal-rounded bx-sm"></i></a>
                                </div>
                            </div>  
                            </Popover.Header>
                            <Popover.Body bsPrefix="Messenger-bsbody">
                            <Scrollbar>
                                <div className="">
                                    <a className="badge bg-primary p-2 m-2">All</a>
                                    <a className="badge bg-secondary p-2 m-2">Unread</a>
                                </div>
                                {postList}
                            </Scrollbar>
                            </Popover.Body>
                          </Popover>
                      }>
                        <li class="nav-item">
                            <a class={activeMenu=="Notifications"?"nav-link active-menu": "nav-link"} onClick={()=>{
                                if(activeMenu == "Notifications")
                                setActiveMenu("")
                                else
                                setActiveMenu("Notifications")
                            }}><i className=" bgprimary color-black bx bxs-bell bx-sm bx-border-circle color-black"></i></a>
                        </li>
                    </OverlayTrigger>

                    <OverlayTrigger trigger="click" placement="bottom" show={activeMenu=="Profile"} overlay={
                            <Popover id="popover-basic">
                            <Popover.Body bsPrefix="Profile-bsbody">
                              <div className="card shadow m-2 p-1">
                                 <LeftComponent image="./images/profile_img.jpg" text="Username"></LeftComponent>
                                 <hr />
                                 <a href="#" className="btn btn-link">See all profiles</a>
                              </div>
                              <div className="card shadow p-1 m-2">
                                <ProfileMenuComponent text="Settings & privacy" icon="cog"></ProfileMenuComponent>
                                <ProfileMenuComponent text="Help & support" icon="help-circle"></ProfileMenuComponent>
                                <ProfileMenuComponent text="Display & Accessibility" icon="moon"></ProfileMenuComponent>
                                <ProfileMenuComponent text="Give feedback" icon="message-alt-error"></ProfileMenuComponent>
                                <ProfileMenuComponent text="Log out" icon="door-open"></ProfileMenuComponent>
                              </div>

                             <div className="bottom m-2 mt-3">
                                <small> 
                                    <a href="#" className="link text-secondary">Privacy .</a>
                                    <a href="#" className="link text-secondary">Terms .</a>
                                    <a href="#" className="link text-secondary">Advertising .</a>
                                    <a href="#" className="link text-secondary">Ad choices .</a>
                                    <a href="#" className="link text-secondary">Cookies</a>
                                </small>
                            </div>
                            </Popover.Body>
                          </Popover>
                      }>
                        <li class="nav-item">
                            <a class="nav-link" onClick={()=>{
                                if(activeMenu == "Profile")
                                setActiveMenu("")
                                else
                                setActiveMenu("Profile")
                            }}><img src="./images/profile_img.jpg" alt="Profile image" className="rounded-circle profile-image"/></a>
                        </li>
                    </OverlayTrigger>

                    </ul>
                </div>
                
             </div>
           </nav>
     );
}

export default NavbarGlobal;