import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import Gallery from "react-grid-gallery";



const Cell = ({ data }) => (
  <div className="cell-container shadow-lg p-3 mb-5 bg-white rounded" >
    <article className="mini-post">
      <header>
        <h3 className="header-withoutspace">
          <a href={data.link}>{data.title}</a>
        </h3>
        <time className="published">
          {data.date ? dayjs(data.date).format("DD,MMMM, YYYY"):""}
        </time>
      </header>
       <div>
        <Gallery
          images={data.images}
          backdropClosesModal={true}
          enableImageSelection={false}
          showCloseButton={false}
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
