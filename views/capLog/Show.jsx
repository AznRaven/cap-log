import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Show(props) {
  return (
    <DefaultLayout>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1>{props.pokemon.name}</h1>
        <img src={`${props.pokemon.img}.jpg`} alt={props.pokemon.name} />
        <br />
        <br />
        <div className="d-flex">
          <a href={`/pokemons/${props.pokemon._id}/edit`}>
            <button className="btn btn-outline-primary">Edit</button>
          </a>
          <form
            action={`/pokemons/${props.pokemon._id}?_method=DELETE`}
            method="POST"
          >
            <button className="btn btn-outline-danger mx-5">Delete</button>
          </form>
          <a href="/pokemons">
            <button className="btn btn-outline-dark">Back</button>
          </a>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Show;
