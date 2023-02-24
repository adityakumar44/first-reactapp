import "./pricing.css";

function Price(){
    return(
        <>
        <div className="heading">
            <h3>OUR PRICING</h3>
            <h1>Pricing & Packages</h1>
        </div>
        
        <section className="price">
            <div className=" P-container grid4">
                <div className="item shadow">
                    <h4>Basic Plan</h4>
                    <h1>
                        <span>$</span>
                        49K
                    </h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <button className="outline-btn">Get Started</button>
                </div>
                <div className="item shadow">
                    <h4>BEGINNER PLAN</h4>
                    <h1>
                        <span>$</span>
                        79K
                    </h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <button className="outline-btn">Get Started</button>
                </div>
                <div className="item shadow">
                    <h4>PREMIUM PLAN</h4>
                    <h1>
                        <span>$</span>
                        109K
                    </h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <button className="outline-btn">Get Started</button>
                </div>
                <div className="item shadow">
                    <h4>ULTIMATE PLAN</h4>
                    <h1>
                        <span>$</span>
                        149K
                    </h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <button className="outline-btn">Get Started</button>
                </div>
                
            </div>
        </section>
        </>
    );
}

export default Price ;
