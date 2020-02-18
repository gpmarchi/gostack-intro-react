import React from "react";

function TechItem({ tech, onDelete }) {
  return (
    <li key={tech}>
      {tech}
      <button type="button" onClick={onDelete}>
        Remove
      </button>
    </li>
  );
}

export default TechItem;
