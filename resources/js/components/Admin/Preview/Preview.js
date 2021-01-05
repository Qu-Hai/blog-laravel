import React from "react";

export default function Preview(props) {
  const { title, category, description } = props;
  return (
    <div>
      <p>{title}</p>
      <p>{category}</p>
      <p>{description}</p>
    </div>
  );
}
