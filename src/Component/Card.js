import React from "react";

export default function Card(props) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {props.card.plan}
          </h5>
          <h6 className="card-price text-center">
            ${props.card.price}
            <span className="period">/month</span>
          </h6>
          <ul className="fa-ul">
            <li className={props.card.userEnabler ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={
                    props.card.userEnabler ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>
              {props.card.plan==="FREE"?<>{props.card.userCount}</>:<b>{props.card.userCount}</b>}
            </li>
            <li className={props.card.storageEnabler ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={
                    props.card.storageEnabler ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>
              {props.card.storage}
            </li>
            <li
              className={props.card.publicProjectsEnabler ? "" : "text-muted"}
            >
              <span className="fa-li">
                <i
                  className={
                    props.card.publicProjectsEnabler
                      ? "fas fa-check"
                      : "fas fa-times"
                  }
                ></i>
              </span>
              {props.card.publicProjects}
            </li>
            <li
              className={props.card.communityAccessEnabler ? "" : "text-muted"}
            >
              <span className="fa-li">
                <i
                  className={
                    props.card.communityAccessEnabler
                      ? "fas fa-check"
                      : "fas fa-times"
                  }
                ></i>
              </span>
              {props.card.communityAccess}
            </li>
            <li
              className={props.card.privateProjectsEnabler ? "" : "text-muted"}
            >
              <span className="fa-li">
                <i
                  className={
                    props.card.privateProjectsEnabler
                      ? "fas fa-check"
                      : "fas fa-times"
                  }
                ></i>
              </span>
              {props.card.privateProjects}
            </li>
            <li className={props.card.phoneSupportEnabler ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={
                    props.card.phoneSupportEnabler
                      ? "fas fa-check"
                      : "fas fa-times"
                  }
                ></i>
              </span>
              {props.card.phoneSupport}
            </li>
            <li className={props.card.subDomainEnabler ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={
                    props.card.subDomainEnabler
                      ? "fas fa-check"
                      : "fas fa-times"
                  }
                ></i>
              </span>
              {props.card.plan ==="Pro" ? <><b>Unlimited</b> {props.card.subDomain}</>:<>{props.card.subDomain}</>}
            </li>
            <li className={props.card.statusReportEnabler ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={
                    props.card.statusReportEnabler
                      ? "fas fa-check"
                      : "fas fa-times"
                  }
                ></i>
              </span>
              {props.card.statusReport}
            </li>
          </ul>
          <div className="d-grid">
            <a
              href="javascript void"
              className="btn btn-primary text-uppercase"
            >
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
