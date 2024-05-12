import { Link, Outlet } from "react-router-dom";

const BlogsMenu = () => {
    return (
        <>
            <Link to="/blogs/" class="nav-link">
                News Blog
            </Link>
            <Link to="/blogs/cinema-blog" class="nav-link">
                Cinema Blog
            </Link>
            <Link to="/blogs/sport-blog" class="nav-link">
                Sport Blog
            </Link>
        </>
    );
};

const Blogs = () => {
    return (
        <>
            <h2 className="text-center">Blogs page</h2>
            <BlogsMenu />
            <Outlet />
        </>
    );
};

export default Blogs;
