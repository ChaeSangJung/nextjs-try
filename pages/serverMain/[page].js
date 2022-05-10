/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { popularApiPage } from '../api/api';
import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { WrapImg, WrapPaging } from './style';
import Seo from "../../components/Seo";

const serverMain = ({data}) => {
  const value = 10;
  const max = 500;
  const pageNumbers = [];
  const [pageStart, setPageStart] = useState();
  const [paging, setPaging] = useState([]);

  console.log()

  for (let i = 1; i <= max; i++) {
    pageNumbers.push(i);
  }

  useEffect(()=>{
    setPageStart((Math.ceil(data.page/value)-1)*value)
  },[data.page]);

  useEffect(()=>{
    setPaging(pageNumbers.slice(pageStart,value+pageStart));
  },[pageStart]);

  
  return (
    <>
      <Seo title={`page ${data.page}`} />
      <ul>
        {data.results.map((result)=>(
          <li key={result.id}>
            <Link href={`/movie/${result.id}`}><a><WrapImg>
              <Image 
                src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} 
                alt={result.original_title} 
                layout='fill' 
                objectFit="cover"
              />
            </WrapImg></a></Link>
            <Link href={`/movie/${result.id}`}><a>{result.original_title}</a></Link>
          </li>
        ))}
      </ul>
      <WrapPaging>
        {data.page !== 1 && (<Link href={`/serverMain/1`}><a>first</a></Link>)}
        {data.page-10 > 0 && (<Link href={`/serverMain/${data.page-10}`}><a>prev 10</a></Link>)}
        {data.page-1 > 0 && (<Link href={`/serverMain/${data.page-1}`}><a>prev</a></Link>)}
        
        {paging.map((page)=>(
          data.page !== page ? (<Link href={`/serverMain/${page}`} key={page}><a>{page}</a></Link>) : (<span key={page}>{page}</span>)
        ))}
        {data.page < max && (<Link href={`/serverMain/${data.page+1}`}><a>next</a></Link>)}
        {data.page+10 <= max && (<Link href={`/serverMain/${data.page+10}`}><a>next 10</a></Link>)}
        {data.page !== max &&(<Link href={`/serverMain/${pageNumbers[pageNumbers.length-1]}`}><a>last</a></Link>)}
      </WrapPaging>
    </>
  );
}

export async function getServerSideProps(context) {
  const {page} = context.params;
  const { data } = await popularApiPage(page);
  return {
    props: {data},
  }
}

export default serverMain;