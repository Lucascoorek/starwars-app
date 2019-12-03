import React from "react";
import PropTypes from "prop-types";

const Section = props => {
  return (
    <section className="columns padding">
      <div className="columns-item ">
        <h2 className="my-1">
          <i class="fas fa-jedi"></i> Some title
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, vitae.
          Provident, soluta quam? Facere, et neque velit placeat vel quod ea
          voluptatum, itaque sit perferendis earum? Vitae maiores tenetur
          commodi.
        </p>
      </div>
      <div className="columns-item">
        <h2 className="my-1">
          <i class="fas fa-jedi"></i> Some title
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, vitae.
          Provident, soluta quam? Facere, et neque velit placeat vel quod ea
          voluptatum, itaque sit perferendis earum? Vitae maiores tenetur
          commodi.
        </p>
      </div>
      <div className="columns-item">
        <h2 className="my-1">
          <i class="fas fa-jedi"></i> Some title
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, vitae.
          Provident, soluta quam? Facere, et neque velit placeat vel quod ea
          voluptatum, itaque sit perferendis earum? Vitae maiores tenetur
          commodi.
        </p>
      </div>
    </section>
  );
};

Section.propTypes = {};

export default Section;
