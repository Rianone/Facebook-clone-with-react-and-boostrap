import ProfileMenuComponent from "../components/ProfileMenuComponent";
import FriendComponent from "../components/FriendComponent"
import { useState } from "react";
import "../css/watch.css"
import Scrollbar from "react-scrollbars-custom";
import Video from "../components/Video";
import InfiniteScroll from "react-infinite-scroll-component";

function Watch() {
    const [items, setItems] = useState(Array.from({ length: 5 }));

    function fetchMoreData(){
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
          setItems(items.concat(Array.from({ length: 5 })));
        }, 10000);
      };

    return ( 
        <div className="container-fluid Watch">
            <div className="row">
                <div className="col-3 shadow p-3 friends-menu">
                    <div className="col-12 d-flex justify-content-between mb-3">
                        <h3>Watch</h3>
                        <a><i className="bgprimary color-black bx bxs-cog bx-sm bx-border-circle color-black"></i></a>
                    </div>

                    <ProfileMenuComponent text="Home" icon="slideshow"></ProfileMenuComponent>
                    <ProfileMenuComponent text="Live" icon="video"></ProfileMenuComponent>
                    <ProfileMenuComponent text="Shows" icon="movie-play"></ProfileMenuComponent>
                    <ProfileMenuComponent text="Saved videos" icon="bookmark"></ProfileMenuComponent>
                </div>

                <div className="col-9 p-3 watch-container">
                    <Scrollbar>
                        <div className="col-12 p-5">
                            <div className="col-12 p-5">

                            <InfiniteScroll
                                dataLength={items.length}
                                next={fetchMoreData()}
                                hasMore={true}
                                loader={<h4>Loading...</h4>}
                            >
                                {items.map((i, index) => (
                                <Video index={index} />
                                ))}
                            </InfiniteScroll>        
                            
                            </div>
                        </div>
                    </Scrollbar>
                </div>


            </div>
        </div>
     );
}

export default Watch;