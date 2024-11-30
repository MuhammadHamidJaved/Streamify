// import React from 'react';
// import { Container, Row, Col, Carousel } from 'react-bootstrap';

// const Discover = () => {
//   const categories = [
//     {
//       title: 'Most Watched This Week',
//       movies: [
//         { title: 'Venom: The Last Dance', year: 2024, imageUrl: 'https://via.placeholder.com/150?text=Venom+The+Last+Dance' },
//         { title: 'Moana 2', date: 'Nov 27', imageUrl: 'https://via.placeholder.com/150?text=Moana+2' },
//         { title: 'Inception', year: 2010, imageUrl: 'https://via.placeholder.com/150?text=Inception' },
//         { title: 'Avengers: Endgame', year: 2019, imageUrl: 'https://via.placeholder.com/150?text=Inception' },
//         { title: 'Joker', year: 2019, imageUrl: 'https://via.placeholder.com/150?text=Inception' },
//         { title: 'Venom: The Last Dance', year: 2024, imageUrl: 'https://via.placeholder.com/150?text=Inception' },
//         { title: 'Moana 2', date: 'Nov 27', imageUrl: 'https://via.placeholder.com/150?text=Moana+2' },
//         { title: 'Inception', year: 2010, imageUrl: 'https://via.placeholder.com/150?text=Inception' },
//         { title: 'Avengers: Endgame', year: 2019, imageUrl: 'https://via.placeholder.com/150?text=Endgame' },
//         { title: 'Joker', year: 2019, imageUrl: 'https://via.placeholder.com/150?text=Joker' },
//         { title: 'Venom: The Last Dance', year: 2024, imageUrl: 'https://via.placeholder.com/150?text=Venom+The+Last+Dance' },
//         { title: 'Moana 2', date: 'Nov 27', imageUrl: 'https://via.placeholder.com/150?text=Moana+2' },
//         { title: 'Inception', year: 2010, imageUrl: 'https://via.placeholder.com/150?text=Inception' },
//         { title: 'Avengers: Endgame', year: 2019, imageUrl: 'https://via.placeholder.com/150?text=Endgame' },
//         { title: 'Joker', year: 2019, imageUrl: 'https://via.placeholder.com/150?text=Joker' },
//         { title: 'Venom: The Last Dance', year: 2024, imageUrl: 'https://via.placeholder.com/150?text=Venom+The+Last+Dance' },
//         { title: 'Moana 2', date: 'Nov 27', imageUrl: 'https://via.placeholder.com/150?text=Moana+2' },
//         { title: 'Inception', year: 2010, imageUrl: 'https://via.placeholder.com/150?text=Inception' },
//         { title: 'Avengers: Endgame', year: 2019, imageUrl: 'https://via.placeholder.com/150?text=Endgame' },
//         { title: 'Joker', year: 2019, imageUrl: 'https://via.placeholder.com/150?text=Joker' },
//         { title: 'Venom: The Last Dance', year: 2024, imageUrl: 'https://via.placeholder.com/150?text=Venom+The+Last+Dance' },
//         { title: 'Moana 2', date: 'Nov 27', imageUrl: 'https://via.placeholder.com/150?text=Moana+2' },
//         { title: 'Inception', year: 2010, imageUrl: 'https://via.placeholder.com/150?text=Inception' },
//         { title: 'Avengers: Endgame', year: 2019, imageUrl: 'https://via.placeholder.com/150?text=Endgame' },
//         { title: 'Joker', year: 2019, imageUrl: 'https://via.placeholder.com/150?text=Joker' },
//         { title: 'Venom: The Last Dance', year: 2024, imageUrl: 'https://via.placeholder.com/150?text=Venom+The+Last+Dance' },
//         { title: 'Moana 2', date: 'Nov 27', imageUrl: 'https://via.placeholder.com/150?text=Moana+2' },
//         { title: 'Inception', year: 2010, imageUrl: 'https://via.placeholder.com/150?text=Inception' },
//         { title: 'Avengers: Endgame', year: 2019, imageUrl: 'https://via.placeholder.com/150?text=Endgame' },
//         { title: 'Joker', year: 2019, imageUrl: 'https://via.placeholder.com/150?text=Joker' },
//         { title: 'Venom: The Last Dance', year: 2024, imageUrl: 'https://via.placeholder.com/150?text=Venom+The+Last+Dance' },
//         { title: 'Moana 2', date: 'Nov 27', imageUrl: 'https://via.placeholder.com/150?text=Moana+2' },
//         { title: 'Inception', year: 2010, imageUrl: 'https://via.placeholder.com/150?text=Inception' },
//         { title: 'Avengers: Endgame', year: 2019, imageUrl: 'https://via.placeholder.com/150?text=Endgame' },
//         { title: 'Joker', year: 2019, imageUrl: 'https://via.placeholder.com/150?text=Joker' },
//         // Add up to 20 movies per category
//       ]
//     },
//     {
//       title: 'Trending Trailers',
//       movies: [
//         { title: 'The Batman', year: 2022, imageUrl: 'https://via.placeholder.com/150?text=The+Batman' },
//         { title: 'Spider-Man: No Way Home', year: 2021, imageUrl: 'https://via.placeholder.com/150?text=No+Way+Home' },
//         { title: 'Dune', year: 2021, imageUrl: 'https://via.placeholder.com/150?text=Dune' },
//         { title: 'Gladiator II', date: 'Nov 13', imageUrl: 'https://via.placeholder.com/150?text=Gladiator+II' },
//         // Add up to 20 movies per category
//       ]
//     },
//     // Add additional categories with 20 movies each
//   ];

//   // Function to chunk movies into groups of 6
//   const chunkMovies = (movies, chunkSize = 6) => {
//     const chunks = [];
//     for (let i = 0; i < movies.length; i += chunkSize) {
//       chunks.push(movies.slice(i, i + chunkSize));
//     }
//     return chunks;
//   };

//   return (
//     <div className="container-fluid">
//       <Container fluid className="bg-dark text-white py-4">
//         {categories.map((category, index) => (
//           <div key={index} className="mb-4">
//             <h4>{category.title} <span>&#9654;</span></h4>
//             <Carousel indicators={false} interval={null}>
//               {chunkMovies(category.movies).map((movieChunk, chunkIndex) => (
//                 <Carousel.Item key={chunkIndex}>
//                   <Row className="d-flex justify-content-start">
//                     {movieChunk.map((movie, idx) => (
//                       <Col key={idx} xs={6} sm={4} md={3} lg={2} className="my-2">
//                         <div className="card bg-dark text-white">
//                           <img src={movie.imageUrl} alt={movie.title} className="card-img-top" />
//                           <div className="card-body">
//                             <h6 className="card-title">{movie.title}</h6>
//                             <p className="card-text">{movie.year || movie.date}</p>
//                           </div>
//                         </div>
//                       </Col>
//                     ))}
//                   </Row>
//                 </Carousel.Item>
//               ))}
//             </Carousel>
//           </div>
//         ))}
//       </Container>
//     </div>
//   );
// };

// export default Discover;

import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./Discover.css"; // Import a CSS file for additional styling

const Discover = () => {
  const categories = [
    {
      title: "Most Watched This Week",
      movies: [
        {
          title: "Venom: The Last Dance",
          year: 2024,
          imageUrl: "https://via.placeholder.com/150?text=Venom+The+Last+Dance",
        },
        {
          title: "Moana 2",
          date: "Nov 27",
          imageUrl: "https://via.placeholder.com/150?text=Moana+2",
        },
        {
          title: "Inception",
          year: 2010,
          imageUrl: "https://via.placeholder.com/150?text=Inception",
        },
        {
          title: "Avengers: Endgame",
          year: 2019,
          imageUrl: "https://via.placeholder.com/150?text=Inception",
        },
        {
          title: "Joker",
          year: 2019,
          imageUrl: "https://via.placeholder.com/150?text=Inception",
        },
        {
          title: "Venom: The Last Dance",
          year: 2024,
          imageUrl: "https://via.placeholder.com/150?text=Venom+The+Last+Dance",
        },
        {
          title: "Moana 2",
          date: "Nov 27",
          imageUrl: "https://via.placeholder.com/150?text=Moana+2",
        },
        {
          title: "Inception",
          year: 2010,
          imageUrl: "https://via.placeholder.com/150?text=Inception",
        },
        {
          title: "Avengers: Endgame",
          year: 2019,
          imageUrl: "https://via.placeholder.com/150?text=Inception",
        },
        {
          title: "Joker",
          year: 2019,
          imageUrl: "https://via.placeholder.com/150?text=Inception",
        },
        {
          title: "Venom: The Last Dance",
          year: 2024,
          imageUrl: "https://via.placeholder.com/150?text=Venom+The+Last+Dance",
        },
        {
          title: "Moana 2",
          date: "Nov 27",
          imageUrl: "https://via.placeholder.com/150?text=Moana+2",
        },
        {
          title: "Inception",
          year: 2010,
          imageUrl: "https://via.placeholder.com/150?text=Inception",
        },
        {
          title: "Avengers: Endgame",
          year: 2019,
          imageUrl: "https://via.placeholder.com/150?text=Inception",
        },
        {
          title: "Joker",
          year: 2019,
          imageUrl: "https://via.placeholder.com/150?text=Inception",
        },
      ],
    },
    {
      title: "Trending Trailers",
      movies: [
        {
          title: "The Batman",
          year: 2022,
          imageUrl: "https://via.placeholder.com/150?text=The+Batman",
        },
        {
          title: "Spider-Man: No Way Home",
          year: 2021,
          imageUrl: "https://via.placeholder.com/150?text=No+Way+Home",
        },
        {
          title: "Dune",
          year: 2021,
          imageUrl: "https://via.placeholder.com/150?text=Dune",
        },
        {
          title: "Gladiator II",
          date: "Nov 13",
          imageUrl: "https://via.placeholder.com/150?text=Inception",
        },
        {
            title: "The Batman",
            year: 2022,
            imageUrl: "https://via.placeholder.com/150?text=The+Batman",
          },
          {
            title: "Spider-Man: No Way Home",
            year: 2021,
            imageUrl: "https://via.placeholder.com/150?text=No+Way+Home",
          },
          {
            title: "Dune",
            year: 2021,
            imageUrl: "https://via.placeholder.com/150?text=Dune",
          },
          {
            title: "Gladiator II",
            date: "Nov 13",
            imageUrl: "https://via.placeholder.com/150?text=Inception",
          },
      ],
    },
  ];

  const chunkMovies = (movies, chunkSize = 6) => {
    const chunks = [];
    for (let i = 0; i < movies.length; i += chunkSize) {
      chunks.push(movies.slice(i, i + chunkSize));
    }
    return chunks;
  };

  return (
    <div className="discover-container">
      <Container
        fluid
        className="text-dark py-4"
        style={{ backgroundColor: "#DAD7CD" }}
      >
        {categories.map((category, index) => (
          <div key={index} className="mb-4">
            <h4 className="category-title">
              {category.title}{" "}
              <span className="title-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24" // Adjust width as needed
                  height="24" // Adjust height as needed
                  fill="#3A5A40" // Arrow color
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5l8 7-8 7V5z" />
                </svg>
              </span>
            </h4>
            <Carousel indicators={false} interval={null}>
              {chunkMovies(category.movies).map((movieChunk, chunkIndex) => (
                <Carousel.Item key={chunkIndex}>
                  <Row className="d-flex justify-content-start">
                    {movieChunk.map((movie, idx) => (
                      <Col
                        key={idx}
                        xs={6}
                        sm={4}
                        md={3}
                        lg={2}
                        className="my-2"
                      >
                        <div className="movie-card">
                          <img
                            src={movie.imageUrl}
                            alt={movie.title}
                            className="card-img-top"
                          />
                          <div className="card-body">
                            <h6 className="card-title">{movie.title}</h6>
                            <p className="card-text">
                              {movie.year || movie.date}
                            </p>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Discover;
