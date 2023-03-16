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
          <a href="/capLogs/new">
            <button type="button" class="btn btn-outline-primary mx-3">
              Add...
            </button>
          </a>
          <form action="/capLogs/clear?_method=DELETE" method="POST">
            <button class="btn btn-outline-danger">CLEAR</button>
          </form>
        </div>
        
        <ul
          className="d-flex flex-wrap justify-content-around my-3"
          style={{ listStyle: "none" }}
        >
          {props.capLogs.map((capLog, index) => (
            <div className="capLog-item shadow d-flex flex-wrap justify-content-around my-3 align-items-center">
              <li
                className="capLog-item shadow d-flex flex-wrap justify-content-around my-3 align-items-center"
                key={index}
              >
                <a href={`/capLogs/${capLog._id}`}>
                  <strong>{capLog.name}</strong>
                  <div></div>
                  <img src={`${capLog.img}.jpg`} alt={capLog.name} />
                </a>
              </li>
            </div>
          ))}
        </ul>
        {/* buttons */}
        <div className="d-flex">
          <a href="/capLogs/new">
            <button type="button" class="btn btn-outline-primary  mx-3">
              Add...
            </button>
          </a>

          <form action="/capLogs/clear?_method=DELETE" method="POST">
            <button class="btn btn-outline-danger">CLEAR</button>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Index;
