import React, { useState } from "react";

const CookieSettings = () => {
  const [essentialCookies, setEssentialCookies] = useState(true);
  const [analyticsCookies, setAnalyticsCookies] = useState(false);
  const [marketingCookies, setMarketingCookies] = useState(false);

  // Function to handle saving cookie settings
  const saveCookieSettings = () => {
    // Here you would implement the logic to save the cookie settings, e.g., using localStorage or sending them to a server
    console.log("Cookie settings saved!");
  };
  return (
    <div className="container my-5" style={{ height: "60vh" }}>
      <h1 className="text-center mb-4">Cookie Settings</h1>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="card shadow">
            <div className="card-body">
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="essentialCookies"
                  checked={essentialCookies}
                  onChange={(e) => setEssentialCookies(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="essentialCookies">
                  Essential Cookies (Required)
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="analyticsCookies"
                  checked={analyticsCookies}
                  onChange={(e) => setAnalyticsCookies(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="analyticsCookies">
                  Analytics Cookies
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="marketingCookies"
                  checked={marketingCookies}
                  onChange={(e) => setMarketingCookies(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="marketingCookies">
                  Marketing Cookies
                </label>
              </div>
              <div className="text-center">
                {" "}
                {/* Centering the button */}
                <button
                  className="btn btn-primary"
                  onClick={saveCookieSettings}>
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieSettings;
