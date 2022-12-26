import "../css/profile.css"
import {useState, useEffect} from "react"
import Friends from "./Friends";
import Watch from "./Watch";
import Marketplace from "./Marketplace";
import Groups from "./Groups";
import NavbarGlobal from "../components/Navbar";
import Main from "./Main";

function ProfilePage() {

    const [actualPage, setActualPage] = useState("Home");


    function actual(page){
        if(page == "Home"){
            return <Main></Main>
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

    return ( 
        <div className="Profile">
           
           <NavbarGlobal setActualPage={setActualPage}></NavbarGlobal>

           {actual(actualPage)}
           
        </div>
    );
}

export default ProfilePage;