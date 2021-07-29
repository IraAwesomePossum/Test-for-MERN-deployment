import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <>
      <div id="postBorder" className="post">
        {post.photo && (
          <img className="postImage" src={PF + post.photo} alt="salad" />
        )}
        <div className="postInfo">
          <div className="postCategories">
            {post.categories.map((c) => (
              <span className="postCategories">{c.name}</span>
            ))}
          </div>
          <Link
            to={`/post/${post._id}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <span className="postTitle"> {post.title}</span>
          </Link>

          <hr />
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="postDescription">{post.description}</p>
        <Link
          to={`/post/${post._id}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <button className="postSubmit">Read more</button>
        </Link>
      </div>
    </>
  );
}
