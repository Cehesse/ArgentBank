import React from "react";

function Banner(props) {
	return (
		<div className="banner-section">
            <div className="banner-section_explain">
            <h2 className="banner-section_title">{props.title_1}</h2>
            <h2 className="banner-section_title">{props.title_2}</h2>
            <h2 className="banner-section_title">{props.title_3}</h2>
			<p className="banner-section_text">{props.text}</p>
            </div>
		</div>
	);
}

export default Banner;