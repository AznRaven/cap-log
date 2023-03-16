import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Index(props) {
  // can't use hooks or state
  // can't use event listeners in the same way
  return (
    <DefaultLayout>
      <div className="d-flex flex-column flex-wrap justify-content-around align-items-center">
        <div className="flex-column justify-content-center align-items-center">
          <h1>Captain's Log</h1>
        </div>
        {/* buttons */}
        <div className="d-flex">
          <a href="/capLog/new">
            <button type="button" class="btn btn-outline-primary mx-3">
              Add...
            </button>
          </a>
          <form action="/capLog/clear?_method=DELETE" method="POST">
            <button class="btn btn-outline-danger">CLEAR</button>
          </form>
        </div>
        
        <ul
          className="d-flex flex-wrap justify-content-around my-3"
          style={{ listStyle: "none" }}
        >
          {props.capLog.map((capLog, index) => (
            <div className="capLog-item shadow d-flex flex-wrap justify-content-around my-3 align-items-center">
              <li
                className="capLog-item shadow d-flex flex-wrap justify-content-around my-3 align-items-center"
                key={index}
              >
                <a href={`/capLog/${capLog._id}`}>
                  <strong>{capLog.title}</strong>
                  <div></div>
                  <strong>{capLog.entry}</strong>
                  <strong>{capLog.shipIsBroken}</strong>

                </a>
              </li>
            </div>
          ))}
        </ul>
        {/* buttons */}
        <div className="d-flex">
          <a href="/capLog/new">
            <button type="button" class="btn btn-outline-primary  mx-3">
              Add...
            </button>
          </a>

          <form action="/capLog/clear?_method=DELETE" method="POST">
            <button class="btn btn-outline-danger">CLEAR</button>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Index;
