import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../../posts";
import "./Blog.css";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <div className="blogpost-notfound">Post you are looking for does not exist.</div>;

  const { title, date, content, tags, image, author } = post;

  return (
    <div className="blogpost-container">
      <div className="blog-container">

        {image && (
          <div className="blogpost-image">
            <img src={image} alt={title} />
          </div>
        )}
        <h1 className="blogpost-title">{title}</h1>

        <div className="blogpost-meta">
          <span className="blogpost-date">
            <span className="blogpost-text-label">
              <i class="fa fa-calendar" aria-hidden="true"></i>
            </span>
            {date}
          </span>
          {/* <span className="blogpost-author">
          <i className="fa-regular fa-user"></i>
          <span className="blogpost-text-label">By:</span>
          {author}
        </span> */}
          {tags && (
            <div className="blogpost-tags">
              <span className="blogpost-text-label">
                <i class="fa fa-tags" aria-hidden="true"></i>
              </span>
              {tags.map(tag => (
                <Link key={tag} to={`/blog/tag/${tag}`} className="blogpost-tag">
                  #{tag}
                </Link>
              ))}
            </div>
          )}

        </div>

        <div className="blogpost-divider" />

        <div className="blogpost-content">{content}</div>

      </div>

      <div className="blogpost-back">
        <Link to="/blog">← Back to Blog</Link>
      </div>
    </div>
  );
};

export default BlogPost;