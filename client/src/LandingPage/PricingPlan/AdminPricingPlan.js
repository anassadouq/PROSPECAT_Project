import React, {useState, useEffect} from "react";
import { AccountService } from "../../Authentification/AccountService";
import { TbLogout } from "react-icons/tb";
import { useNavigate, Link } from 'react-router-dom';
import Axios from "axios";

export default function AdminPricingPlan(){
    const [plans, setPlans] = useState([]);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [leadssearch, setLeadssearch] = useState("");
    const [emailsearch, setEmailsearch] = useState("");
    const [mlps, setMlps] = useState("");
    const [importcsv, setImportcsv] = useState("");
    const [selectedPlanIndex, setSelectedPlanIndex] = useState(-1);
    let navigate = useNavigate()

    {/*Show Plans*/}
      useEffect(()=>{
        Axios.get("http://localhost:3001/plans")
        .then(res => setPlans(res.data))
      },[])

    {/*Create Plan*/}
    const createPlan = () => {
      if (title && price && leadssearch && emailsearch && mlps && importcsv) {
        Axios.post("http://localhost:3001/createPlan", {
          title, price, leadssearch, emailsearch, mlps, importcsv,
        }).then((res) => {
          setPlans((prevPlans) => [...prevPlans, res.data]);
          window.location.reload();
        });
      }
    };
    
    
    {/*Delete Plan*/}
    const deletePlan = (_id) => {
      Axios.delete(`http://localhost:3001/deletePlan/${_id}`)
        .then(res => {
          console.log(res.data);
          // success response
          setPlans((prevPlans) =>
            prevPlans.filter((plan) => plan._id !== _id)
          );
          window.location.reload(); // Actualiser la page après la suppression réussie
        })
        .catch(err => {
          console.error(err);
          // error response
        });
    };
    

    {/*Logout*/}
      const logout = () => {
        AccountService.logout()
        navigate('/login')
      }

      return(
        <div>
          <div className="my-5 mx-3">
            <h2 className="text-center" style={{ fontWeight: "bold" }}>Pricing Plan
              <button className='btn btn-secondary mx-5' onClick={logout}><TbLogout/> Logout</button>
            </h2>
            <p className="text-secondary text-center" id="text">We offer multiple pricing models that fit every business size.</p>
            
            <center className="my-5">
              <input type="text" placeholder="The Plan Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
              <input type="text" placeholder="The Plan Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
              <input type="text" placeholder="Leads Search" value={leadssearch} onChange={(e) => setLeadssearch(e.target.value)}/>
              <input type="text" placeholder="Email Search" value={emailsearch} onChange={(e) => setEmailsearch(e.target.value)}/>
              <input type="text" placeholder="Maximum Leads Per Search" value={mlps} onChange={(e) => setMlps(e.target.value)}/>
              <input type="text" placeholder="Unlimited CSV IMPORT/EXPORT" value={importcsv} onChange={(e) => setImportcsv(e.target.value)}/>
              <button className="btn btn-primary" onClick={createPlan}>Create New Plan</button>
            </center>
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
                      <button className="mx-2 btn rounded-pill" id="sffn">Start For Free NOW</button>
                      <button className="btn btn-danger rounded-pill" onClick={() => deletePlan(plans[selectedPlanIndex]._id)}>Delete Plan</button>                    </div>
                  </div>
                ) : (
                  <div className="plan-left">
                    <h4 className="text-center"></h4>
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
          </div>
        </div>
    )
}