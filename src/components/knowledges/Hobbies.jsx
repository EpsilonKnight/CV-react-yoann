import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-gamepad"></i>
          <span>Retro Game + jeux indés</span>
        </li>
        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>Sport</span>
        </li>
        <li className="hobby">
          <i className="fas fa-sitemap"></i>
          <span>Organiser des évènements</span>
        </li>
        <li className="hobby">
          <i className="fab fa-bitcoin"></i>
          <span>Crypto-monnaie</span>
        </li>
        <li className="hobby">
          <i className="fas fa-video"></i>
          <span>Cinéphile</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
