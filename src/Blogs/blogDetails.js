import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './blogDetails.css';  

const BlogDetailsPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
  
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://travel-com-lk3o.onrender.com/Blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-details-container">
      <img src={blog.image} alt={blog.title} />
      <h1>{blog.title}</h1>
      <p><strong>Author:</strong> {blog.author}</p>
      <p>{blog.Description}</p>
      <h3>Conclusion</h3>
      <p>{blog.conclusion}</p>
    </div>
  );
};

export default BlogDetailsPage;
