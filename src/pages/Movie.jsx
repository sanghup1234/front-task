import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const MovieWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MovieContent = styled.div`
  padding: 5rem 0;
  width: 1054px;
  max-width: 95%;

  p {
    text-align: center;
  }
`;

const MovieTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 300;
  color: #d81d45;
  margin-bottom: 1rem;
`;

const Loading = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .3);
  color: #fff;
  font-size: 2rem;
`;

const Movie = () => {
  const [movies, setMovies] = useState([]);

  const _getMovies = async () => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?limit=50');
    const responseJson = await response.json();
    const {
      data: {movies},
    } = responseJson;
    console.log(movies);

    setMovies(movies);
  };

  useEffect(() => {
    _getMovies();
  }, []);

  return (
    <MovieWrap>
      <MovieContent>
        <MovieTitle>Movie List</MovieTitle>
        {!movies.length && <Loading>Loading...</Loading>}
        {movies?.map(movie => (
          <p key={movie.id}>{movie.title}</p>
        ))}
      </MovieContent>
    </MovieWrap>
  );
}

export default Movie
