// CandidateSuggestion.js
import React, { useState, useEffect } from "react";
import userData from "../data/cadidate.json"; // Importar os dados dos usuários

function CandidateSuggestion({ selectedSkills }) {
  const [suggestedCandidates, setSuggestedCandidates] = useState([]);

  useEffect(() => {
    // Função para calcular a correspondência entre as habilidades selecionadas e as habilidades do usuário
    const calculateAffinity = (userSkills) => {
      return selectedSkills.reduce((acc, skill) => {
        if (userSkills.includes(skill)) {
          return acc + 1;
        }
        return acc;
      }, 0);
    };

    // Função para encontrar sugestões de candidatos com base nas habilidades selecionadas
    const findSuggestedCandidates = () => {
      const updatedUserData = userData.map((user) => {
        const affinity = calculateAffinity(user.generalSkills);
        return { ...user, affinity };
      });
      updatedUserData.sort((a, b) => b.affinity - a.affinity);
      setSuggestedCandidates(updatedUserData.slice(0, 5));
    };

    findSuggestedCandidates();
  }, [selectedSkills]);

  return (
    <div>
      <h2>Candidate Suggestions:</h2>
      <ul>
        {suggestedCandidates.map((candidate) => (
          <li key={candidate._id}>
            {candidate.name} - Affinity: {candidate.affinity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CandidateSuggestion;
