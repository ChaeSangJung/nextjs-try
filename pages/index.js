// import { useEffect, useState } from "react";
import styled from "styled-components";
import Seo from "../components/Seo";
import { popularApi } from "./api/api";

const WrapCont = styled.div`
  display: block;
`;

export default function Home({results}){
  // const [movies, setMovies] = useState([]);
  // useEffect(()=>{
  //   (async () => {
  //     const { results } = await (
  //       await fetch(`/api/movies`)).json();
  //     setMovies(results);
  //   })();
  // },[]);
  // useEffect(()=>{
  //   (async ()=>{
  //     const {data : { results }} = await popularApi();
  //     setMovies(results);
  //   })();
  // },[]);
  
  return (
    <WrapCont>
      <Seo title={'home'} />
      {/* {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <strong>{movie.original_title}</strong>
        </div>
      ))} */}
      {!results && <h4>Loading...</h4>}
      {results?.map((movie) => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <strong>{movie.original_title}</strong>
        </div>
      ))}
    </WrapCont>
  );
}

export async function getServerSideProps() {
  const {data : { results }} = await popularApi();
  return {
    props: {
      results,
    },
  }
}