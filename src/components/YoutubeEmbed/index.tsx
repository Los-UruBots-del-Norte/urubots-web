import React from "react";
import PropTypes from "prop-types";

export const YoutubeEmbed = ({ embedId }:any) => (
        <iframe
            className='w-full h-full object-cover mix-blend-overlay absolute bg-opacity-50'
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="Embedded youtube"
        />
);
