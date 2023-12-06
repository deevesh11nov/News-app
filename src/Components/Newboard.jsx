// import React, { useEffect, useState } from "react";
// import Newsitem from "./Newsitem";

// const Newboard = ({ category }) => {
//   const [articles, setArticle] = useState([]);

//   useEffect(() => {
//     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
//       import.meta.env.VITE_API_KEY
//     }`;
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => setArticle(data.articles));
//   }, [category]);

//   return (
//     <div>
//       <h2 className="text-center">
//         Latest <span className="badge bg-danger">News</span>
//       </h2>

//       {articles.map((news, index) => {
//         return (
//           <Newsitem
//             title={news.title}
//             description={news.description}
//             src={news.urlToImage}
//             url={news.url}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default Newboard;

import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

const Newboard = ({ category }) => {
  const [articles, setArticle] = useState([]);
  const [isGridView, setIsGridView] = useState(true);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticle(data.articles));
  }, [category]);

  const toggleView = () => {
    setIsGridView((prevState) => !prevState);
  };

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <button
        className="btn btn-primary mb-3"
        style={{ backgroundColor: "white", border: "white" }}
        onClick={toggleView}
      >
        <img
          style={{ width: "40px", height: "40px", backgroundColor: "white" }}
          src={
            isGridView
              ? "https://i.ibb.co/C9m9z9Z/list.png"
              : "https://i.postimg.cc/NFMGXbjN/grid.png"
          }
        />
      </button>
      <div className={isGridView ? "row" : ""}>
        {articles.map((news, index) => (
          <div key={index} className={isGridView ? "col-md-3" : "mb-3"}>
            <Newsitem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
              isGridView={isGridView}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newboard;
