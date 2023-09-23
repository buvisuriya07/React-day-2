import "./App.css";
import Card from "./Component/Card"

function App() {
  const data = [
    {
      plan: "FREE",
      price: 0,
      userCount: "5 User",
      userEnabler:true,
      storage: "50GB Storage",
      storageEnabler:true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess: "Community Access",
      communityAccessEnabler:true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler:false,
      phoneSupport: "Unlimited Phone Support",
      phoneSupportEnabler: false,
      subDomain: "Free Subdomain",
      subDomainEnabler:false,
      statusReport: "Montly Status Report",
      statusReportEnabler:false
    },
    {
      plan: "Plus",
      price: 9,
      userCount: "Single User",
      userEnabler:true,
      storage: "5GB Storage",
      storageEnabler:true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess: "Community Access",
      communityAccessEnabler:true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler:true,
      phoneSupport: "Unlimited Phone Support",
      phoneSupportEnabler: true,
      subDomain: "Free Subdomain",
      subDomainEnabler:true,
      statusReport: "Montly Status Report",
      statusReportEnabler:false
      
    },
    {
      plan: "Pro",
      price: 49,
      userCount: "Unlimited User",
      userEnabler:true,
      storage: "150GB Storage",
      storageEnabler:true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess: "Community Access",
      communityAccessEnabler:true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler:true,
      phoneSupport: "Unlimited Phone Support",
      phoneSupportEnabler: true,
      subDomain: "Free Subdomain",
      subDomainEnabler:true,
      statusReport: "Montly Status Report",
      statusReportEnabler:true
      
    },
  ];
  return (
    <section className="pricing py-5">
    <h1 className="heading">PRICE CART by Mouli Bhaskaran</h1>
      <div className="container">
        <div className="row">
          {data.map((e) => {
            return <Card card={e} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
