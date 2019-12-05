import React from "react";

const Section = () => {
  return (
    <section className="columns padding">
      <div className="columns-item ">
        <h2 className="my-1">Obi-Wan Kenobi</h2>
        <i className="fas fa-jedi my-1"></i>
        <q>
          Well, if droids could think, there’d be none of us here, would there?
        </q>
      </div>
      <div className="columns-item">
        <h2 className="my-1">Qui-Gon Jinn</h2>
        <i className="fas fa-jedi my-1"></i>
        <q>Your focus determines your reality</q>
      </div>
      <div className="columns-item">
        <h2 className="my-1">Jango Fett</h2>
        <i className="fas fa-jedi my-1"></i>
        <q>I’m just a simple man trying to make my way in the universe.</q>
      </div>
    </section>
  );
};

export default Section;
