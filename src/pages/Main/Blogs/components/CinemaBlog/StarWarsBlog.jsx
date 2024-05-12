import { useParams } from "react-router-dom";

const StarWarsBlog = (props) => {
    const params = useParams();
    const swId = params.id;

    const blog = props.data.find(b => b.id == swId);
    if(blog === undefined) {
        return <h3>Блог не найден</h3>
    } 
    else {
        return (
            <>
                <h2>Star Wars Blog #{blog.id}</h2>
                <h4>{blog.title}</h4>
                <p>{blog.desc}</p>
            </>
        )
    }

};

export default StarWarsBlog;
