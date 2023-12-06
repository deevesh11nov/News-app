// import React from "react";

// const Newsitem = ({ title, description, src, url, isGridView }) => {
//   const cardStyle = {
//     maxWidth: "339px",
//     textAlign: isGridView ? "center" : "left",
//   };
//   return (
//     <div
//       className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3  px-2 py-2"
//       style={{ cardStyle }}
//     >
//       <img
//         src={
//           src
//             ? src
//             : "https://www.examsegg.com/wp-content/uploads/2021/02/hindi-news-channels-list-e1613312066124-810x379.png"
//         }
//         style={{ height: "200px", width: "100%" }}
//         className="card-img-top"
//         alt="..."
//       />
//       <div className="card-body">
//         <h5 className="card-title">{title.slice(0, 50)}</h5>
//         <p className="card-text">
//           {description
//             ? description.slice(0, 80)
//             : "WhatsApp has recently been working on various new features and one of them is the 'secret"}
//         </p>
//         <a href={url} className="btn btn-primary">
//           Read More..
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Newsitem;

import React from "react";

const Newsitem = ({ title, description, src, url, isGridView }) => {
  const cardClasses = `card bg-dark text-light mb-3 ${
    isGridView ? "d-inline-block my-3 mx-3" : "mx-auto w-50 "
  } px-2 py-2`;

  return (
    <div className={cardClasses}>
      <img
        src={
          src
            ? src
            : "https://www.examsegg.com/wp-content/uploads/2021/02/hindi-news-channels-list-e1613312066124-810x379.png"
        }
        style={{ height: "200px", width: "100%" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 80)
            : "WhatsApp has recently been working on various new features and one of them is the 'secret"}
        </p>
        <a href={url} className="btn btn-primary">
          Read More..
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
