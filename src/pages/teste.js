import Candidato from "../components/Candidato";
import React, { useState, useEffect } from "react";
import candidateJSON from "../../data/candidate.json"

const TestePage = () => {
    const [candidate, setCandidate] = useState();
  console.log(candidate)
   useEffect(()=>{
    const candidateId = 1;
const filteredCandidate = candidateJSON.find(candidate=> candidate.id = candidateId)
setCandidate(filteredCandidate)
   }, [])
    return (
      <div>
        <h1>Candidate</h1>
        {candidate && <Candidato candidate={candidate} />}
      </div>
    );
  };
  
  export default TestePage;

