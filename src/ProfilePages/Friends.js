import ProfileMenuComponent from "../components/ProfileMenuComponent";
import FriendComponent from "../components/FriendComponent"
import { useState } from "react";
import "../css/friends.css"
import Scrollbar from "react-scrollbars-custom";

function Friends() {
    const [items, setItems] = useState(Array.from({ length: 10 }));


    return ( 
        <div className="container-fluid Friends">
            <div className="row">
                <div className="col-3 shadow p-3 friends-menu">
                    <div className="col-12 d-flex justify-content-between mb-3">
                        <h3>Friends</h3>
                        <a><i className="bgprimary color-black bx bxs-cog bx-sm bx-border-circle color-black"></i></a>
                    </div>

                    <ProfileMenuComponent text="Home" icon="group"></ProfileMenuComponent>
                    <ProfileMenuComponent text="Friend requests" icon="user-plus"></ProfileMenuComponent>
                    <ProfileMenuComponent text="Suggestions" icon="user-plus"></ProfileMenuComponent>
                    <ProfileMenuComponent text="All friends" icon="user-minus"></ProfileMenuComponent>
                    <ProfileMenuComponent text="Birthdays" icon="gift"></ProfileMenuComponent>
                    <ProfileMenuComponent text="Custom lists" icon="user-minus"></ProfileMenuComponent>
                </div>

                <div className="col-9 p-3 friends-container">
                    <Scrollbar>
                    <div className="col-12 d-flex justify-content-between p-3 mt-2">
                        <h4>Friends</h4>
                        <a href="#">See all</a>
                    </div>
                    <div className="col-12 p-4">
                        <div className="d-flex w-100">
                            <FriendComponent index="1"/>
                            <FriendComponent index="2"/>
                            <FriendComponent index="3"/>
                            <FriendComponent index="4"/>
                            <FriendComponent index="5"/>
                            <FriendComponent index="6"/>
                        </div>
                        <div className="d-flex w-100">
                            <FriendComponent index="7"/>
                            <FriendComponent index="8"/>
                            <FriendComponent index="9"/>
                            <FriendComponent index="10"/>
                            <FriendComponent index="11"/>
                            <FriendComponent index="1"/>
                        </div>
                        <div className="d-flex w-100">
                            <FriendComponent index="5"/>
                            <FriendComponent index="9"/>
                            <FriendComponent index="2"/>
                            <FriendComponent index="4"/>
                            <FriendComponent index="3"/>
                            <FriendComponent index="6"/>
                        </div>
                        
                    </div>
                    </Scrollbar>
                </div>


            </div>
        </div>
     );
}

export default Friends;