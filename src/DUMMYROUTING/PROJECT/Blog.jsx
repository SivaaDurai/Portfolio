import React, { useState } from "react";
import './BlogStyle.css';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      title: "How I Built My Portfolio in React.js",
      date: "June 20, 2025",
      summary: "A step-by-step guide on how I created my personal portfolio.",
      content: `I started by setting up a React.js project using Create React App. 
      I structured my components into sections like Home, About, Services, Portfolio, and Contact.
      I used EmailJS for sending emails directly from the form and React Router for navigating between pages.
      Styling was done using CSS Flexbox and media queries to ensure responsiveness.
      The entire process helped me learn component structuring and deployment.`,
    },
    {
      title: "Hands on Experience in creating mini webpages",
      date: "May 10, 2025",
      summary: "A showcase of practical learning through small, functional web projects",
      content: `I dove into three practical mini-projects to reinforce my front-end skills: 
a **Flipkart Clone** with a responsive product layout, banners, and adaptive design using CSS Grid and Flexbox; 
a **To-Do List** app featuring intuitive task creation, deletion, and completion, backed by real-time DOM updates and local storage; and 
a **BMI Calculator** that accepts user input, validates data, performs the health index calculation, and displays categorized feedback instantly.
These bite-sized yet focused projects provided hands-on experience with layout techniques, interactivity, and logic
handling—demonstrating that learning by building can significantly elevate development understanding and confidence.
`,
    },
  ];

  const handleClick = (index) => {
    setSelectedPost(selectedPost === index ? null : index); // toggle
  };

  return (
    <section className="blog" id="blog">
      <div className="blog-container">
        <h1>My Blog</h1>
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post" onClick={() => handleClick(index)}>
            <h2>{post.title}</h2>
            <p><strong>Date:</strong> {post.date}</p>
            <p>{post.summary}</p>

            {selectedPost === index && (
              <div className="blog-content">
                <p>{post.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;

{/*
import React from "react";
import './BlogStyle.css'
const Blog = () => {
  const blogPosts = [
    {
      title: "How I Built My Portfolio in React.js",
      date: "June 20, 2025",
      summary: "A step-by-step guide on how I created my personal portfolio.",
    },
    {
      title: "5 Tips for Cracking Zoho Interview",
      date: "May 10, 2025",
      summary: "My preparation strategy and resources for Zoho interviews.",
    },
  ];

  return (
    <>
    <section className="blog" id="blog">

    <div className="blog-container">
      <h1>My Blog</h1>
      {blogPosts.map((post, index) => (
        <div key={index} className="blog-post">
          <h2>{post.title}</h2>
          <p><strong>Date:</strong> {post.date}</p>
          <p>{post.summary}</p>
        </div>
      ))}
    </div>
    </section>
    </>
  );
};

export default Blog; */}
