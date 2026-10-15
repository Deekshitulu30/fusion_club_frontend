import React from "react";

const POSTS = [
  {
    num: "01",
    title: "How we built our autonomous UAV from scratch",
    readTime: "05 MIN READ",
  },
  {
    num: "02",
    title: "Inside FUSION'\''s robotics prototyping workflow",
    readTime: "07 MIN READ",
  },
  {
    num: "03",
    title: "ESP32 to edge: our IoT sensor pipeline explained",
    readTime: "04 MIN READ",
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <div className="blog-header">
          <div className="blog-kicker">LATEST FROM THE LAB</div>
          <h2 className="blog-heading">Read.</h2>
        </div>
        <div className="blog-list">
          {POSTS.map((post) => (
            <div key={post.num} className="blog-item">
              <span className="blog-num">{post.num}</span>
              <div className="blog-body">
                <div className="blog-title">{post.title}</div>
                <div className="blog-readtime">{post.readTime} &rarr;</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
