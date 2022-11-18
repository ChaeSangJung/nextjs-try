import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import styled from "styled-components";
import Seo from "../components/Seo";
import { popularApi } from "./api/api";
import { QueryClient, dehydrate, useQuery } from 'react-query';

const WrapCont = styled.div`
  display : flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 600px;
  margin: 0 auto;
  gap: 10px;
  .list_mov {
    width: calc(50% - 10px);
  }
  .box_img {
    position: relative;
    padding-bottom: 150%;/* 2:3 */
    width: 100%;
    height: 0;
  }
`;

export default function Home(){
  const [movies, setMovies] = useState([]);
  
  // useEffect(()=>{
  //   (async ()=>{
  //     const {data : { results }} = await popularApi();
  //     setMovies(results);
  //   })();
  // },[]);

  const { data } = useQuery(['posts'], popularApi());

  console.log(data)
  
  return (
    <WrapCont>
      {/* <Seo title={'home'} />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div className='list_mov' key={movie.id}>
          <div className='box_img'>
            <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} layout='fill' objectFit="cover"/>
          </div>
          <Link href={`/movie/${movie.id}`}><a>{movie.original_title}</a></Link>
        </div>
      ))} */}
      {/* {!results && <h4>Loading...</h4>} */}
      {/* {results?.map((movie) => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <strong>{movie.original_title}</strong>
        </div>
      ))} */}
    </WrapCont>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('posts', popularApi());
  
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
  // const {data : { results }} = await popularApi();
  // console.log(results)
  // return {
  //   props: {
  //     results,
  //   },
  // }
}