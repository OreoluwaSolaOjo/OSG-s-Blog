import { Link } from "react-router-dom";
import avatar from '../images/avatar.jpg';
import "../index.css";
const BlogList = ({ blogs, title }) => {
    // const blogs = props.blogs;
    // const title = props.title;


    return (
        <div className="blog-list">
            <h1> {title} </h1>
            {blogs.map((myblog) => (
                <div className="blog-preview" key={myblog.id}>
                <img src={avatar} alt="avatar" className="avatar" />
                <div className="blog-body">
                <Link to={`/blogdetails/${myblog.id}`}>
                        <h2 className="blog-title">{myblog.title}</h2>
                        <span className="author"><p>Written by {myblog.author}</p></span> 

                    </Link>
                </div>
                    

                </div>
            ))}
        </div>
    );
}

export default BlogList;


// const ArticleList = ({ articles, title, handleDelete }) => {
//     return (
//         <div className="content">
//             <h1>{title}</h1>
//             {articles.map((article) => (
//             <div className="article-preview" key={article.id}>
//                 <img src={avatar} alt="avatar" className="avatar" />
//                 <div className="article-body">
//                     <h2 className="article-title">{article.title}</h2>
//                     <span className="author">{`Article by ${article.author}`}</span>
//                 </div>
//                 <div className="deleteButton">
//                     <button onClick={() => {handleDelete(article.id)}}>Delete</button>
//                 </div>
                
//             </div>
//          ))}
//     </div>
//     )
// }

// export default ArticleList; 