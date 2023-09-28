import "./HomeStyles.css";

function Home() {
  return (
    <>
      <div className="home">
        <div>
          <fieldset>
            <div className="container3">
              <div className="row">
                <div className="col-lg-6">
                  <div className="sign-up1">
                    <h3 className="account">Have an account?</h3>
                    <h4 className="sign">Sign In</h4>
                  </div>
                  <div className="form-field email">
                    <label for="email" id="email-label">
                      Email:
                    </label>
                    <input
                      type="text"
                      email="email"
                      id="email"
                      placeholder="example@example.com"
                      required
                    />
                  </div>
                  <div className="form-field password">
                    <label for="password" id="password-label">
                      Password:
                    </label>
                    <input
                      type="text"
                      password="password"
                      id="password"
                      placeholder="********"
                      required
                    />
                  </div>
                  <div className="sign-in1">
                    <button className="sign-in">SIGN IN</button>
                  </div>
                </div>
                <div className=" col-lg-3">
                  <img
                    className="airplane"
                    src="https://cdn.pixabay.com/photo/2017/08/02/00/15/architecture-2568948_640.jpg"
                    alt="Rose Court"
                  />
                  <h3 className="dont">Don't have an account?</h3>
                  <button className="sign-up2">Sign Up</button>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
}

export default Home;
