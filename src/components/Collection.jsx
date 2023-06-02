import React from "react";
import Image from "./Image";
const Collection = () => {
  const ImagesList = [...new Array(8)].map(
    (number, index) => `/images/photo - Copy (${index + 1}).jpeg`
  );
  return (
    <>
    <ul className="images-collection-container">
      {ImagesList.map((url, index) => {
        return (
          <li className={index % 2 === 0 ? "item short" : "item tall"} key={index}>
            <figure>
              <Image url={url}/>
            </figure>
          </li>
        );
      })}
    </ul>
    <div className="d-dlex mb-2">
      <a href="/" className="mx-auto fs-3">
        View More
      </a>
    </div>
    </>
  );
};

export default Collection;
