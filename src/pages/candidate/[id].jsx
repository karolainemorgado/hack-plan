//criar pasta candidate
//src\pages\candidate\[id].jsx

import React, { useState, useEffect } from "react";
import candidateJSON from "../../../data/candidate.json"
import Candidato from "@/components/Candidato";
import { useParams } from "next/navigation";

const TestePage = () => {
  const params = useParams()
    const [candidate, setCandidate] = useState();
  console.log(candidate)
   useEffect(()=>{
  if (params && params.id) {
    const filteredCandidate = candidateJSON.find(candidate=> candidate._id === params?.id)
    setCandidate(filteredCandidate)
  }

   }, [params])
    return (
      <div>
        <h1>Lista de Candidatos</h1>
        {candidate && <Candidato candidate={candidate} />}
      </div>
    );
  };
  
  export default TestePage;