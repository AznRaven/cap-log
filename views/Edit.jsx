import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Edit(props) {
  return (
    <DefaultLayout>
      <div>
        <h1>Edit capLog</h1>
        <form action={`/capLogs/${props.capLog._id}?_method=PUT`} method="POST">
          <label htmlFor="nme">Name:</label>
          <br />
          <input type="text" id="nme" name="name" value={props.capLog.name} />
          <br />
          <br />
          <input type="text" id="img" img="img" value={props.capLog.img} />
          <br />
          <br />
          <button className="btn btn-outline-primary">Submit</button>
        </form>
      </div>
    </DefaultLayout>
  );
}

export default Edit;