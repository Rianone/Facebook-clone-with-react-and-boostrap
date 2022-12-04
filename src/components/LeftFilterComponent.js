function LeftFilterComponent(props) {
    return ( 
     <a href={props.url}>
        <div className="left-box-filter-element border mb-2 rounded p-1">
            <div className="d-flex">
                <img src={props.image} alt="Left info image" className="rounded-circle left-image me-3"/>
                <span className="align-self-center">{props.text}</span>
            </div>
            <small className="text-secondary text-center">{props.desc}</small>
        </div>
      </a>
     );
}

export default LeftFilterComponent;