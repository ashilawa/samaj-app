import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import Gallery from "react-grid-gallery";



const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          <a href={data.link}>{data.title}</a>
        </h3>
        <time className="published">
          {dayjs(data.date).format("MMMM, YYYY")}
        </time>
      </header>
       <div>
        <Gallery
          images={data.images}
          backdropClosesModal={true}
          enableImageSelection={false}
        />
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string
  }).isRequired
};

export default Cell;
