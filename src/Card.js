import React from "react";

const card = (props) => {
    const { name, email, id} = props
  return (
    <div className=" tc bg-light-green dib br3 pa1 ma1 grow bw2 shadow-2">
      <img alt="Robots" src={`https://robohash.org/${id}&100x100`} />

      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default card;
