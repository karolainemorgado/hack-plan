//criar pasta exemplo
//src\pages\exemplo\[career].jsx

import { useParams } from "next/navigation";

export default function Home() {
  const params = useParams();

  if (params) {
  }
  console.log(params?.career);

  return <h1>{params?.career}</h1>;
}