import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './bloglist.css';  

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://travel-com-lk3o.onrender.com/Blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-list-container">
      <h2>Our Blogs</h2>
      <div className="blog-cards">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.summary}</p>
            <Link to={`/blog/${blog.id}`} className="btn btn-primary">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogListPage; 
