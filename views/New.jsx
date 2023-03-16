import React from "react";

function New() {
  return (
    <div>
            <h1>New capLog</h1>
            <form action="/capLogs" method="POST">
                <label htmlFor="nme">capLog:</label><br />
                <input type="text" id="nme" name="name" /><br /><br />

                <label htmlFor="img">Image URL:</label><br />
                <input type="text" id="img" name="img" /><br /><br />
                <button>Submit</button>
            </form>
        </div>
  );
}

export default New;
