import { useState, useEffect } from "react";
import Axios from "axios";
import "./PricingPlan.css";

export default function PricingPlan() {
  const [plans, setPlans] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [leadssearch, setLeadssearch] = useState("");
  const [emailsearch, setEmailsearch] = useState("");
  const [mlps, setMlps] = useState("");
  const [importcsv, setImportcsv] = useState("");

  const [selectedPlanIndex, setSelectedPlanIndex] = useState(-1);

  {/*Show Plans*/}
    useEffect(()=>{
      Axios.get("http://localhost:3001/plans")
      .then(res => setPlans(res.data))
    },[])

  return (
    <div>
      <div className="my-5 mx-3" id="pricingplan">
        <h2 className="text-center" style={{ fontWeight: "bold" }}>Pricing Plan</h2>
        <p className="text-secondary text-center" id="text">We offer multiple pricing models that fit every business size.</p>

          {plans.map((plan, index) => (
            <div className="row" key={index}>
              <div className="col-5 mx-5 ">
                {selectedPlanIndex === index && (
                  <div>
                    <h5 id="titleplan" className="mx-5">{plan.title}</h5>
                    <p>Leads Search
                      <span className="mx-5" id="numberPlan">{plan.leadssearch}</span>
                    </p>
                    <p>Email Search
                      <span className="mx-5" id="numberPlan">{plan.emailsearch}</span>
                    </p>
                    <p>Maximum Leads Per Search
                      <span className="mx-5" id="numberPlan">{plan.mlps}</span>
                    </p>
                    <p>Unlimited CSV IMPORT/EXPORT
                      <span className="mx-5" id="numberPlan">{plan.importcsv}</span>
                    </p>
                    <button className="mx-2 btn rounded-pill" id="sffn">Start For Free NOW</button>
                  </div>
                )}
              </div>
              <div className="col-4">
                <ul type="none">
                  <li>
                    <button className="btn btn-light button" id="listPlan" onClick={() => setSelectedPlanIndex(index)}>{plan.title}
                      <span className="mx-5" id="numberPlan">{plan.price}$</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}