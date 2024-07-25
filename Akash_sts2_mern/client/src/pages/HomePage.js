import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../components/HomePage.css';

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get("/api/blogs");
      setBlogs(res.data);
    };
    fetchBlogs(); 
  }, []);

  return (
    <div className="homepage-container bg-dark">
        <div className="mb-5"><h1 className="text-center text-light"> Welcome to Cars World</h1></div>
      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-4" key={blog._id}>
            <div className="card blog-card mb-4 shadow-sm">
              <img
                src={blog.imageUrl}
                className="card-img-top"
                alt={blog.title}
              />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.content.substring(0, 100)}...</p>
                <Link to={`/blogs/${blog._id}`} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
