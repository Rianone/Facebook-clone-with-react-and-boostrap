import {useState} from 'react'
import LeftComponent from '../components/LeftComponent';
import Reels from '../components/Reels';
import Rooms from '../components/Rooms';
import Stories from '../components/Stories';
import InfiniteScroll from "react-infinite-scroll-component";
import "../css/homepage.css"
import Publication from '../components/Publication';


function Home() {
    const [activeSlide, setActiveSlide] = useState("Stories");
    const [items, setItems] = useState(Array.from({ length: 5 }));

    function actual(page){
        if(page == "Stories"){
            return <Stories></Stories>
        }
        else if(page == "Videos"){
            return <Reels></Reels>
        }
        else if(page == "Rooms"){
            return <Rooms></Rooms>
        }  
    }
    
    function fetchMoreData(){
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
          setItems(items.concat(Array.from({ length: 5 })));
        }, 5000);
      };
    
    return ( 
        <div className="Homepage">
            <div className="card shadow mb-4">
                <nav className="navbar navbar-expand-md d-flex">
                    <ul class="navbar-nav mt-2 mt-lg-0 d-flex justify-content-between">
                      <li class="nav-item d-flex">
                            <a class={activeSlide=="Stories"?"nav-link active ps-5 pe-5": "ps-5 pe-5 nav-link"} onClick={()=>{
                                setActiveSlide("Stories")
                            }}><i className="bx bxs-book-open bx-sm"></i><span className='text-bold ms-3'>Stories</span></a>
                        </li> 
                        <li class="nav-item">
                            <a class={activeSlide=="Videos"?"nav-link active ps-5 pe-5": "nav-link ps-5 pe-5"} onClick={()=>{
                                setActiveSlide("Videos")
                            }}><i className="bx bxs-videos bx-sm"></i><span className='text-bold ms-3'>Reels</span></a>
                        </li> 
                        <li class="nav-item">
                            <a class={activeSlide=="Rooms"?"nav-link active ps-5 pe-5": "nav-link ps-5 pe-5"} onClick={()=>{
                                setActiveSlide("Rooms")
                            }}><i className="bx bxs-video-plus bx-sm"></i><span className='text-bold ms-3'>Rooms</span></a>
                        </li> 
                    </ul>
                </nav>
                <div className="card-body">
                    {actual(activeSlide)}
                </div>
            </div>

            <div className="card shadow mb-4">
                <div className="row m-2 mt-4">
                    <div className="col-1">
                        <a><img src="./images/profile_img.jpg" alt="Profile image" className="rounded-circle profile-image"/></a>
                    </div>
                    <div className="col-11">
                        <input type="text" className='form-control rounded-5 bgprimary' placeholder="What's on your mind Username ?" />
                    </div>
                </div>
                <div className="row m-2 mb-4">
                    <div className="col-4">
                        <LeftComponent image="./images/what_img1.png" text="Live video"></LeftComponent>
                    </div>
                    <div className="col-4">
                        <LeftComponent image="./images/what_img2.png" text="Photo/video"></LeftComponent>
                    </div>
                    <div className="col-4">
                        <LeftComponent image="./images/what_img3.png" text="Feeling/activity"></LeftComponent>
                    </div>
                </div>
            </div>

            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData()}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {items.map((i, index) => (
                    <Publication index={index} ></Publication>
             ))}
            </InfiniteScroll>
        </div>
     );
}

export default Home;