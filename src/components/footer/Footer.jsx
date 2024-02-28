import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="foot1-all">
            <div className="foot1-mini1">
              <h1 className="mini1-h">Quality cleaning for your home</h1>
              <p className="mini1-p">
                Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
                eiusmo.
              </p>
              <img className="mini1-img" src="/images/foot-frame.svg" alt="" />
            </div>
            <div className="foot1-mini2">
              <h2 className="mini2-h">Contact us</h2>
              <p className="mini2-p">
                1827 Nickel Road, Los Angeles, CA, 90017, United States
              </p>
              <p className="mini2-p1">(414) 567 - 2109</p>
              <p className="mini2-p2">contact@cleaning.com</p>
            </div>
            <div className="foot1-mini3">
              <h2 className="mini3-h">Hours</h2>
              <h2 className="mini3-h1">Monday to Friday</h2>
              <p className="mini3-p">6:00 AM - 9:00 PM</p>
              <h2 className="mini3-h2">Saturday & Sunday</h2>
              <p className="mini3-p">8:00 AM - 8:00 PM</p>
            </div>
            <div className="foot1-mini4">
              <h2 className="mini4-h">Get a free estimate</h2>
              <h1 className="mini4-h1">(414) 567 - 2109</h1>
              <p className="mini4-p">
                Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <button className="mini4-but">Request a free quote</button>
            </div>
          </div>
          <div className="foot2-all">
            <img src="/images/foot-liniya.svg" alt="" />
            <div className="foot2-beet">
              <img className="foot2-img" src="/images/head-logo.svg" alt="" />
              <div className="foot2-mini">
                <p className="foot2-p">Copyright © Cleaning X | Designed by</p>
                <p className="foot2-p1">BRIX Templates</p>
                <p className="foot2-p">- Powered by</p>
                <p className="foot2-p1">Webflow Licenses</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
