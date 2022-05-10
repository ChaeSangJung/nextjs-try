import { detailApi } from '../api/api';

const Detail = ({data}) => {
  console.log(data);
  
  // const [movie, setMovie] = useState();
  // useEffect(()=>{
  //   if(parseID) {
  //     (async ()=>{
  //       const {data : details} = await detailApi(parseID);
  //       setMovie(details)
  //     })()
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[parseID]);

  // console.log(movie)

  return (
    <div></div>
  );
}

export async function getServerSideProps(context) {
  const {id} = context.params;
  const {data} = await detailApi(id);
  
  return {
    props: {data: data},
  }
}

export default Detail;