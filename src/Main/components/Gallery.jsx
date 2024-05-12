import Card from "./Card";

const Gallery = (props) => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Gallery</h2>
            <div className="row">
                {props.data.map((item) => (
                    <Card
                        title={item.title}
                        price={item.price}
                        image={item.image}
                    />
                ))}
                <Card />
            </div>
        </div>
    );
};

export default Gallery;
