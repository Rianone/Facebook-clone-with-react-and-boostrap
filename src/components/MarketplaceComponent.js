function MarketplaceComponent(props) {
    return ( 
        <div className="col-2 me-1">
        <div className="card shadow">
            <img className="card-img-top" src={"https://picsum.photos/200/250?random="+props.index+"-image.jpg"} alt="Title"/>
            <div className="card-body">
                <h4 class="card-title">{Math.floor(Math.random()*5000)} FCFA</h4>
                <h6 className="text-bold ">Productname</h6>
                <small className="text-secondary">Yaoundé, Cameroun</small>
            </div>
        </div>
    </div>
     );
}

export default MarketplaceComponent;