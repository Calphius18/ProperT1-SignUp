import "./HomeStyles.css";

function Home() {
  return (
    <>
      <div className="home">
        <div>
          <div className="home-left">
            <h6>Checkout</h6>
            <p className="navigate">
              <span className="information">Information</span>{" "}
              <i class="fa-solid fa-forward"></i> Document Upload{" "}
              <i class="fa-solid fa-forward"></i> Payment{" "}
              <i class="fa-solid fa-forward"></i> Confirmation
            </p>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend>Information</legend>
              <div className="form-field">
                <label for="dropdown" id="dropdown-label">
                  Type of property:
                </label>
                <select name="type" id="dropdown">
                  <option value="" disabled selected>
                    Select the type of property
                  </option>
                  <option value="rose">Rose Court</option>
                  <option value="princeton">Princeton Gardens</option>
                  <option value="265">265 Flats</option>
                  <option value="pelham">Pelham Court LP</option>
                </select>
              </div>
              <div className="container1">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-field">
                      <label for="name" id="name-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Please enter your first name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-field">
                      <label for="name" id="name-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Please enter your last name"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container1">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-field">
                      <label for="number" id="number-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        number="number"
                        id="number"
                        placeholder="Phone Number (+234)"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-field">
                      <label for="email" id="name-label">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-field address">
                <label for="address" id="address-label">
                  Address1
                </label>
                <input
                  type="text"
                  address="address"
                  id="address"
                  placeholder="Type your address"
                  required
                />
              </div>
              <div className="container1">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-field">
                      <label for="city" id="city-label">
                        City
                      </label>
                      <input
                        type="text"
                        city="City"
                        id="city"
                        placeholder="Your city"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-field">
                      <label for="state" id="state-label">
                        State
                      </label>
                      <input
                        type="text"
                        state="state"
                        id="state"
                        placeholder="Your State"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="base">
                <button className="back">
                  <i class="fa-solid fa-arrow-left"></i> Back
                </button>
                <button className="next">NEXT</button>
              </div>
            </fieldset>
          </div>
        </div>
        <div>
          <fieldset className="fieldset1">
            <h2>Detail Order</h2>
            <div className="container2">
              <div className="row">
                <div className="col-lg-4">
                  <img
                    src="https://lh4.googleusercontent.com/proxy/XRp1N4ExO7vjgDrbh1STsHRMnYOuZFGA7zn67zhEEwMSXsU4b46bX8OZ_ZLcp8CiQXrzv9TC1VUeoQrShUUxCD95odi5-86TX4KzYFUJJegBBmkXrBLZdE6b6mtMdbPTnH23ImDBjRjg7m2n0jjJh5E6fGSMcg=w296-h202-n-k-no-v1"
                    alt="Rose Court"
                  />
                </div>
                <div className="col-lg-8">
                  <h4>Rose Court</h4>
                  <p className="rose">3 bedroom apartment</p>
                  <h4>N33,666,000</h4>
                </div>
              </div>
            </div>
            <hr />
            <div className="total">
              <div>
                <p className="rose">Total</p>
              </div>
              <div className="rose">N33,666,000</div>
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
}

export default Home;
