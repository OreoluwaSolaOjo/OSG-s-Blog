import { useNavigate, useParams } from "react-router";

import useFetch from "./useFetch";

const BlogDetails = () => {
    // useparams is a hook that lets us use parameters like id in the routes
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/homepage');
        })
    }
    return (
        <div className="blog-details">
            {isPending && <h2> Loading ...</h2>}
            {error && <h2> {error}</h2>}
            {blog && (<article>
                <h2>{blog.title}</h2>
                <p> Written by {blog.author}</p>
                <div> {blog.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>)}
        </div>
    );
}

export default BlogDetails;