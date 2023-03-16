import React from "react";

function New() {
  return (
    <div>
            <h1>New Captains Log</h1>
            <form action="/capLogs" method="POST">
                <label htmlFor="ttl">title:</label><br />
                <input type="text" id="ttl" name="title" /><br /><br />

                <label htmlFor="img">entry:</label><br />
                <input type="text" id="img" name="img" /><br /><br />

                <input type="checkbox" id="shipIsBroken" name="shipIsBroken" value="shipIsBroken"></input>
                <button>Submit</button>
            </form>
        </div>
  );
}

export default New;
