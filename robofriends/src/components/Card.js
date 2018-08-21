import React from 'react'
import '../containers/App.css'

const Card = ({ name, email, id }) => {
  return (
    <div className="cards">
      {/* tachyons / tc bg-white-50 dib br4 pa3 ma2 grow bw2 shadow-5 */}
      <img src={`https://robohash.org/${id}?200x200`} alt="roboto imago"/>
      <div className="texted">
        <h2>{ name }</h2>
        <p>{ email }</p>
      </div>
    </div>
  );
}


export default Card;
