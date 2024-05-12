import { Link, Outlet } from "react-router-dom";
 
const BlogsMenu = () => {
    return (
        <>
            <Link to="/blogs/cinema-blog" className="nav-link">
                Cinema Blog
            </Link>
            <br />
            <Link to="/blogs/sport-blog" className="nav-link">
                Sport Blog
            </Link>
        </>
    );
};
 
const Blogs = () => {
    return (
        <>
            
            <BlogsMenu />
            <Outlet />
            
        </>
    );
};
 
export default Blogs;