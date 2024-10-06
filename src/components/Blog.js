import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import { FaSearch } from 'react-icons/fa';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  // Add blog information here
  const blogs = [
    { id: 1, title: "Rag Model", img: `${process.env.PUBLIC_URL}/Blog_pics/rag/rag_better.png`, link: "/rag" },
  ];

  useEffect(() => {
    setFilteredBlogs(
      blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="search_bar" style={{ marginLeft: '25vw', display: 'flex', alignItems: 'center' }}>
        <FaSearch style={{ marginRight: '10px', color: '#888' }} /> {/* Add margin to space it from the input */}
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
          style={{
            width: '70%', // Adjust width as needed
            borderRadius: '10px',
            height: '38px',
            paddingLeft: '10px', // Adjust padding for input
          }}
        />
      </div>
      <div className="container_blog">
        <div className="row" style={{ marginLeft: '3vh', marginRight: '3vh' }}>
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <div key={blog.id} className="col-md-4">
                <div className="card_blog" style={{ width: '18rem' }}>
                  <Link to={blog.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <img src={blog.img} className="card-img-top" alt={blog.title} style={{ width: '285px', height: '200px' }} />
                    <div className="card-body">
                      <h5 className="card-title"><b>{blog.title}</b></h5>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No blogs found matching your search.</p>
          )}
        </div>
      </div>
    </>
  );
}
