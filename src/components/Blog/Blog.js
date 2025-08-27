import React from "react";
import { Link } from "react-router-dom";
import posts from "../../posts";
import "./Blog.css"; 

const Blog = () => (
  <div className="blog-container">
    <h1>The Iteratives</h1>
    <p style={{ fontSize: '1rem', fontStyle: 'italic', marginTop: '-0.95rem', marginLeft: '2rem' }}>
    Little iterations of ideas and curiosity.
  </p>
    Hi there! 
    This blog is where I write about my side projects — 
    the experiments, ideas, and explorations that keep me curious.
    Sometimes it&apos;s code, sometimes it&apos;s design, and 
    sometimes it&apos;s just lessons learned along the way. 
    If you enjoy building things for fun, you&apos;ll feel right at home here. 
    Stay tuned!

    {posts.map(post => (
      <div key={post.slug} className="blog-card">
        <h2>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <div className="blog-meta">
          <span className="author">{post.author}</span>
          <span className="date">{post.date}</span>
        </div>
        <p className="summary">{post.summary}</p>
        <div className="blog-tags">
          {post.tags.map(tag => (
            <Link key={tag} to={`/blog/tag/${tag}`} className="tag">
              {tag}
            </Link>
          ))}
        </div>
      </div>
    ))}
    <footer className="footer">
    © 2025 Blog by Hrishikesh Dhondge
  </footer>
  </div>
);

export default Blog;
