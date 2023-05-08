import { useState, useEffect } from "react";
import Axios from "axios";
import './PricingPlan.css'

export default function PricingPlan() {
  const [plans, setPlans] = useState([]);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(-1);

  {/*Show Plans*/}
    useEffect(()=>{
      Axios.get("http://localhost:3001/plans")
      .then(res => setPlans(res.data))
    },[])

    return (
      <section className="pricing-plan" id="pricing">
        <div className="container">
          <div className="text-center">
            <h2 className="main-heading">Pricing Plan</h2>
            <p className="main-heading-para">We offer multiple pricing models that fits every business size.</p>
          </div>
    
          <div className="pricing-plan-container">
            <div className="row">
              <div className="col-md-6">
                {selectedPlanIndex !== -1 ? (
                  <div className="plan-left">
                    <h4 className="text-center">
                      {plans[selectedPlanIndex].title}
                    </h4>
                    <ul className="list-unstyled">
                      <li>
                        <h5 className="option">Leads Search</h5>
                        <h5 className="value">
                          {plans[selectedPlanIndex].leadssearch}
                        </h5>
                      </li>
                      <li>
                        <h5 className="option">Email Search</h5>
                        <h5 className="value">
                          {plans[selectedPlanIndex].emailsearch}
                        </h5>
                      </li>
                      <li>
                        <h5 className="option">Maximum Leads Per Search</h5>
                        <h5 className="value">{plans[selectedPlanIndex].mlps}</h5>
                      </li>
                      <li>
                        <h5 className="option">Unlimited CSV IMPORT/EXPORT</h5>
                        <img src="images/check.svg" alt="Icone check" />
                      </li>
                    </ul>
                    <div className="text-center">
                      <button className="mx-2 btn rounded-pill" id="btn_contact1">Start For Free NOW</button>
                    </div>
                  </div>
                ) : (
                  <div className="plan-left">
                    <h4 className="text-center">Free Plan</h4>
                    <ul className="list-unstyled">
                      <li>
                        <h5 className="option">Leads Search</h5>
                        <h5 className="value">
                          10
                        </h5>
                      </li>
                      <li>
                        <h5 className="option">Email Search</h5>
                        <h5 className="value">
                          100
                        </h5>
                      </li>
                      <li>
                        <h5 className="option">Maximum Leads Per Search</h5>
                        <h5 className="value">50</h5>
                      </li>
                      <li>
                        <h5 className="option">Unlimited CSV IMPORT/EXPORT</h5>
                        <img src="images/check.svg" alt="Icone check" />
                      </li>
                    </ul>
                    <div className="text-center">
                      <button className="mx-2 btn rounded-pill" id="btn_contact1">Start For Free NOW</button>
                    </div>
                  </div>
                )}
              </div>
    
              <div className="col-md-6">
                <div className="row">
                  {plans.map((plan, index) => (
                    <div className="col-md-12" key={index}>
                      <div className="plan-right">
                        <div className="main-check-listing">
                          <ul className="list-unstyled">
                            <li>
                              <input
                                type="radio"
                                name="pack"
                                onClick={() => setSelectedPlanIndex(index)}
                              />
                              <div className="main-check">
                                <div className="row align-items-center">
                                  <div className="col-8">
                                    <span className="main-radio">
                                      <span></span>
                                    </span>
                                    <h4>{plan.title}</h4>
                                  </div>
                                  <div className="col-4">
                                    <h4 className="price">
                                      {plan.price}$ <span>Per month</span>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}