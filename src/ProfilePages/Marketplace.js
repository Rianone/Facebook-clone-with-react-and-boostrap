import ProfileMenuComponent from "../components/ProfileMenuComponent";
import MarketplaceComponent from "../components/MarketplaceComponent"
import { useState } from "react";
import "../css/friends.css"
import Scrollbar from "react-scrollbars-custom";


function Marketplace() {
    return ( 
        <div className="Marketplace container-fluid">
            <div className="row">
                <div className="col-3 shadow p-3 marketplace-menu">
                    <div className="col-12 d-flex justify-content-between mb-3">
                        <h3>Marketplace</h3>
                        <a><i className="bgprimary color-black bx bxs-cog bx-sm bx-border-circle color-black"></i></a>
                    </div>

                    <ProfileMenuComponent text="Browse all" icon="store"></ProfileMenuComponent>
                    <ProfileMenuComponent text="Notifications" icon="bell"></ProfileMenuComponent>
                    <ProfileMenuComponent text="Inbox" icon="message"></ProfileMenuComponent>
                    <ProfileMenuComponent text="Buying" icon="shopping-bag"></ProfileMenuComponent>
                    <ProfileMenuComponent text="Selling" icon="purchase-tag"></ProfileMenuComponent>

                    <button className="btn btn-block btn-primary w-100 mt-3"> + Create new listing</button>
                </div>

                <div className="col-9 p-3 friends-container">
                    <Scrollbar>
                    <div className="col-12 d-flex justify-content-between p-3 mt-2">
                        <h4>Today's pick</h4>
                    </div>
                    <div className="col-12 p-4">
                        <div className="d-flex w-100 mb-4">
                            <MarketplaceComponent index="1"/>
                            <MarketplaceComponent index="2"/>
                            <MarketplaceComponent index="3"/>
                            <MarketplaceComponent index="4"/>
                            <MarketplaceComponent index="5"/>
                            <MarketplaceComponent index="6"/>
                        </div>
                        <div className="d-flex w-100 mb-4">
                            <MarketplaceComponent index="7"/>
                            <MarketplaceComponent index="8"/>
                            <MarketplaceComponent index="9"/>
                            <MarketplaceComponent index="10"/>
                            <MarketplaceComponent index="11"/>
                            <MarketplaceComponent index="1"/>
                        </div>
                        <div className="d-flex w-100 mb-4">
                            <MarketplaceComponent index="5"/>
                            <MarketplaceComponent index="9"/>
                            <MarketplaceComponent index="2"/>
                            <MarketplaceComponent index="4"/>
                            <MarketplaceComponent index="3"/>
                            <MarketplaceComponent index="6"/>
                        </div>
                        
                    </div>
                    </Scrollbar>
                </div>

            </div>
        </div>
     );
}




export default Marketplace;