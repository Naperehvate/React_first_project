const Card = (props) => {
    return (
        <div className="col-sm-12 col-md-4 col-lg-3">
            <div class="card mb-4">
                <img src={props.image} class="card-img-top" alt={props.title} />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">Price: {props.price}$</p>
                    <a href="#" class="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
        </div>
    );
};

Card.defaultProps = {
    title: "Unknown work",
    price: 0.0,
    image: require("../../assets/images/work0.jpg"),
};

export default Card;
