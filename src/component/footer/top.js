import "./footer.css";

function Top() {
  return (
    <>
        <div className="newletter">
            <div className=" container1 flexB">
                <div className="left-news">
                    <h3>Newsletter - Stay tune and get the latest update</h3>
                    <p>Far far away, behind the word mountains</p>
                </div>
                <div className="right-news">
                    <input type='text' placeholder='Enter email address' />
                    <i className='fa fa-paper-plane'></i>
                </div>
            </div>
        </div>
    </>
  );
}
export default Top;
