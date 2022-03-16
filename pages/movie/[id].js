import { useRouter } from "next/router";
import { useEffect } from 'react';
import { useState } from 'react';
import { detailApi } from '../api/api';

export default function Detail() {
  const router = useRouter();
  const parseID = parseInt(router.query.id);

  const [movie, setMovie] = useState();
  useEffect(()=>{
    (async ()=>{
      const {data : details} = await detailApi(parseID);
      
    })()
  },[parseID]);
  return "detail";
}