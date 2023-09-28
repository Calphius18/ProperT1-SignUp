import { Component } from "react";
import "./FooterStyles.css";

class Footer extends Component {
  render() {
    return (
      <nav className="FooterItems">
        <div className="">
          <div className="footertop">
            <div>
              <h1 className="News">Get Exclusive News</h1>
              <p>Sign up Now!</p>
            </div>
            <div>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                required
              />
              <button className="sign-up">SIGN UP</button>
            </div>
          </div>
          <div className="footerbottom">
          <div className="container">
    <div className="row">
      <div className="col-md-6 col-lg-3 col-12 ">
  <h1 className = "logo1" href = "/"> <i className="fa-solid fa-square"></i> ProperT1 </h1>
          </div>
            <div className="col-md-6 col-lg-4 col-12 ">
              <h5 className="h5">Useful Links</h5>
                <div className = "row">
                  <div className = "col-lg-6"> <ul>
                     <li className="nav-item">
                       <a className="" href="/">About Us</a>
                          </li>
                             <li className="nav-item">
                            <a className="" href="/">Blogs</a>
                           </li>
                        <li className="nav-item">
                       <a className="" href="/">Properties</a>
                     </li>
                   <li className="nav-item">
                  <a className="" href="/">Proprietors</a>
                </li>
               </ul>
              </div>
             <div className = "col-lg-4"> <ul>
           <li className="nav-item">
          <a className="" href="/">Account</a>
        </li>
       <li className="nav-item">
         <a className="" href="/">Policy</a>
           </li>
                <li className="nav-item">
                   <a className="" href="/">Terms</a>
               </li>
            <li className="nav-item">
            <a className="" href="/">Contact</a>
           </li>
            </ul>
            </div>
             </div>
              </div>
               <div className="col-md-8 col-lg-5 col-8">
                <h5 className = "h5">Contact Us</h5>
       <p><i class="fa-solid fa-phone-volume"></i> (+84)984 245 3577</p>
       <p><i class="fa-solid fa-envelope"></i> contact@trav.com</p>
       <p><i class="fa-solid fa-location-dot"></i> 397 Lees Creek St. Logansport</p>
                <div className="footer-icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                  </div>
                        </div>
                    </div>
                </div>
            <div></div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Footer;
