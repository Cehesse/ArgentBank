import React from 'react';
import PropTypes from "prop-types";

function Banner({title1, title2, title3, text }) {
	return (
		<div className="banner-section">
            <div className="banner-section_explain">
            <h2 className="banner-section_title">{title1}</h2>
            <h2 className="banner-section_title">{title2}</h2>
            <h2 className="banner-section_title">{title3}</h2>
			<p className="banner-section_text">{text}</p>
            </div>
		</div>
	);
}

Banner.propTypes = {
title: PropTypes.string.isRequired,
text: PropTypes.string.isRequired,
};

export default Banner;