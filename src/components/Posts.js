
function Posts(props) {
    return (<div className="left-box-element">
        <div className="d-flex ps-2 pt-2 pb-2 rounded">
          <div className="img-container d-flex">
            <img src={"https://picsum.photos/200/100?random="+props.index} alt="profile image" className="rounded-circle right-image me-2"/>
            <a><i className="bx bx-slideshow bx-sm bg-primary bx-border-circle text-white"></i></a>
          </div>
          <p className="text-bold">{props.text}</p>
          <span className="not-read bg-primary me-3 p-2"></span>
        </div>
        <div className="text-secondary m-2 pb-2">
          {props.info}
        </div>
     </div> );
}

export default Posts;