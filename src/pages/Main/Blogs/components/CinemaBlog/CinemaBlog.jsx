import { Outlet, Link } from "react-router-dom";

const BlogList = (props) => {
    return (
        <ul className="list-group my-5">
            {
                props.data.map(item => {
                    return <li className="list-group-item">
                        <Link to={`/blogs/cinema-blog/${item.id}`}>{item.title}</Link>
                    </li>
                })
            }
        </ul>
    )
}

const CinemaBlog = (props) => {
    return (
        <>
            <h2>Cinema Blog</h2>
            <BlogList data={props.data}/>
            <Outlet />
        </>
    );
};

export default CinemaBlog;
