function ProfileMenuComponent(props) {
    return ( 
    <a href={props.url}>
        <div className="d-flex left-box-element ps-2 pt-2 pb-2 rounded justify-content-between">
            <div className="">
                <i className={"bgprimary bx bx-sm bx-border-circle color-black bxs-"+props.icon}></i>
                <span className="align-self-center mb-5 ms-2">{props.text}</span>
            </div>
            <div className="display-6 pt-1">
                <i className="bx bx-chevron-right"></i>
            </div>
        </div>
     </a>
     );
}

export default ProfileMenuComponent;