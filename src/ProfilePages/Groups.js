import ProfileMenuComponent from "../components/ProfileMenuComponent";
import MarketplaceComponent from "../components/MarketplaceComponent"
import { useState } from "react";
import "../css/friends.css"
import Publication from "../components/Publication";
import InfiniteScroll from "react-infinite-scroll-component";
import LeftFilterComponent from "../components/LeftFilterComponent";

function Groups() {

    const [items, setItems] = useState(Array.from({ length: 5 }));
    const [items2, setItems2] = useState(Array.from({ length: 5 }));

    function fetchMoreData(){
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
          setItems(items.concat(Array.from({ length: 5 })));
        }, 5000);
    };

    return ( 
        <div className="Groups container-fluid">
        <div className="row">
            <div className="col-3 shadow p-3 groups-menu">
                <div className="col-12 d-flex justify-content-between mb-3">
                    <h3>Groups</h3>
                    <a><i className="bgprimary color-black bx bxs-cog bx-sm bx-border-circle color-black"></i></a>
                </div>

                <ProfileMenuComponent text="Browse all" icon="store"></ProfileMenuComponent>
                <ProfileMenuComponent text="Notifications" icon="bell"></ProfileMenuComponent>

                <button className="btn btn-block btn-primary w-100 mt-3"> + Create new group</button>
                <hr />
                <h6 className="text-bold">Groups you have joined</h6>
                <div className="groups">
                <InfiniteScroll
                dataLength={items2.length}
                hasMore={false}
                loader={<h4>Loading...</h4>}
                >
                {items2.map((i, index) => (
                    <LeftFilterComponent image = {"https://picsum.photos/200/250?random="+index+"-image.jpg"} text="Group name" desc="Lorem ipsum dolor sit amet."></LeftFilterComponent>
                ))}
                </InfiniteScroll>
                </div>
            </div>

            <div className="col-6 p-3 groups-container">
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
            
            <div className="col-3 p-5">
                <div className="">
                <div className="card shadow ms-5">
                    <div className="d-flex m-3 justify-content-between ">
                        <h6 className="text-bold">Friends' groups</h6>
                        <a href="#">See more</a>
                    </div>
                    <p className="text-secondary me-3 ms-3">Groups your friends are in.</p>
                    <img className="card-img-top" src={"https://picsum.photos/400/250?random=1-image.jpg"} alt="Title"/>
                    <div className="card-body">
                        <h5 class="card-title">Group name</h5>
                        <button className="btn btn-block btn-primary w-100 mb-2">JOin group</button>
                     </div>
                </div>
                </div>

            </div>
        </div>
    </div>
     );
}

export default Groups;