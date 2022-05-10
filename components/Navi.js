import Link from 'next/link';

export default function Navi(){
  return (
    <ul>
      <li>
        <Link href='/'><a>main : axios, useEffect, rewrites()</a></Link>
        <Link href='/serverMain'><a>getServerSideProps</a></Link>
      </li>
    </ul>
  );
}