function LeftMenuComponent(props) {
    return ( 
    <a href={props.url} className="left-menu-component">
        <div className="d-flex left-box-element ps-2 pt-2 pb-2 rounded">
          <a href="#"><i className={props.icon}></i></a>
          <span className="align-self-center text-secondary">{props.text}</span>
        </div>
     </a>
     );
}

export default LeftMenuComponent;