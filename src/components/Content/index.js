import React from "react";
import marked from "marked";

const Content = ({ markdown = '' }) => (
  <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
);

export default Content;
