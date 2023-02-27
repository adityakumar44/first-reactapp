import "./Welcome.css";

function HBlog() {
  return (
    <>
        <div className="heading">
        <h3>OUR Blog</h3>
        <h1>Recent From Blog</h1>
        <section className="P-container grid3">
            <div className="item-blog shadow">
                <img alt="name" className="blog-img" src="../images/blog/b1.webp" />
                    <div className="blog-content">
                <p className="flexB">
                    <span className="blog-name">
                    <i className="fa fa-user"></i>ADMIN
                    </span>
                    <span className="blog-date">
                    <i className="fa fa-calendar-alt"></i>JAN. 18, 2021
                    </span>
                    <span className="blog-comments">
                    <i className="fa fa-comments"></i>3 COMMENTS
                    </span>
                </p>
                <h2>Build your Dream Software & Engineering Career</h2>
                <p>
                    A small river named Duden flows by their place and supplies it
                    with the necessary regelialia.
                </p>
                </div>
            </div>
            <div className="item-blog shadow">
                <img  alt="name" className="blog-img" src="../images/blog/b2.webp" />
                <div className="blog-content">
                <p className="flexB">
                    <span className="blog-name">
                    <i className="fa fa-user"></i>ADMIN
                    </span>
                    <span className="blog-date">
                    <i className="fa fa-calendar-alt"></i>JAN. 18, 2021
                    </span>
                    <span className="blog-comments">
                    <i className="fa fa-comments"></i>5 COMMENTS
                    </span>
                </p>
                <h2>Build your Dream Software & Engineering Career</h2>
                <p>
                    A small river named Duden flows by their place and supplies it
                    with the necessary regelialia.
                </p>
                </div>
            </div>
            <div className="item-blog shadow">
                <img alt="name" className="blog-img" src="../images/blog/b3.webp" />
                <div className="blog-content">
                <p className="flexB">
                    <span className="blog-name">
                    <i className="fa fa-user"></i>ADMIN
                    </span>
                    <span className="blog-date">
                    <i className="fa fa-calendar-alt"></i>JAN. 18, 2021
                    </span>
                    <span className="blog-comments">
                    <i className="fa fa-comments"></i>10 COMMENTS
                    </span>
                </p>
                <h2>Build your Dream Software & Engineering Career</h2>
                <p>
                    A small river named Duden flows by their place and supplies it
                    with the necessary regelialia.
                </p>
                </div>
            </div>
            </section>
        </div>
    </>
  );
}

export default HBlog;
