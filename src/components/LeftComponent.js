function LeftComponent(props) {
    return ( 
    <a href={props.url}>
        <div className="d-flex left-box-element ps-2 pt-2 pb-2 rounded">
          <img src={props.image} alt="Left info image" className="rounded-circle left-image me-3"/>
          <span className="align-self-center">{props.text}</span>
        </div>
     </a>
     );
}

export default LeftComponent;