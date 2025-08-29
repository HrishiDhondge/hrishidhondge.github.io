import React from "react";
import { Link } from "react-router-dom";
import posts from "../../posts";
import "./Blog.css";

// Function to count tags
function getTagCounts(posts) {
  const tagCounts = {};
  posts.forEach(post => {
    post.tags?.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  return tagCounts;
}

const TagsPage = () => {
  const tagCounts = getTagCounts(posts);
  const tags = Object.entries(tagCounts);

  return (
    <div className="blog-container" style={{ padding: "2rem" }}>
      <h1>All Tags</h1>
      <div className="tags-list" style={{ display: "flex", flexWrap: "wrap", gap: "1rem 2rem" }}>
        {tags.map(([tag, count]) => (
          <Link key={tag} to={`/blog/tag/${tag}`} className="tag-link" style={{ textDecoration: "none" }}>
            <span className="tag-item" style={{ fontFamily: "Consolas, 'Liberation Mono', monospace" }}>
              {tag} <span className="tag-count">{count}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagsPage;
