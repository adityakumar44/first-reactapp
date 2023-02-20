import "./Welcome.css";

function Welcome() {
  return (
    <>
      <div className="Welcome">
        <div className="container">
          <h3>WELCOME TO ACADEMIA</h3>
          <h1 className="margin">
            Best Online Education
            <br /> Expertise
          </h1>
          <span>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </span>
          <div className="button1">
            <button className="get prop">
              <p>GET STARTED NOW!</p>
              <i class="fa fa-long-arrow-alt-right"></i>
            </button>
            <button className="view prop">
              <p>VIEW COURSES</p>
              <i class="fa fa-long-arrow-alt-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
