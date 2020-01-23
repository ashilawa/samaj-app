import React from "react";
import PropTypes from "prop-types";




const AssociatesCell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>{data.title}</h3>
      </header>
      
        <img className="image" src={data.image} alt={data.title} />
    
      <div >
<<<<<<< HEAD
        <p className="description">{data.desc}</p>
=======
        <p>{data.desc}</p>
>>>>>>> 847d1ba... about submenu added and srm tab updated
      </div>
    </article>
  </div>
);

AssociatesCell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};
export default AssociatesCell;
