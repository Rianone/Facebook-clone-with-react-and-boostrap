import ProfileMenuComponent from "../components/ProfileMenuComponent";
import FriendComponent from "../components/FriendComponent"
import { useState } from "react";
import "../css/friends.css"
import Scrollbar from "react-scrollbars-custom";


function Marketplace() {
    return ( 
        <div className="Marketplace container-fluid">
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
            </div>
        </div>
     );
}




export default Marketplace;