import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSkill } from '../store/actions';

const SkillsComponent = () => {
  const dispatch = useDispatch();
  const selectedSkills = useSelector(state => state.skills.selectedSkills);

  const handleSkillClick = (skillName) => {
    dispatch(selectSkill(skillName));
  };

  return (
    <div>
      <h2>Selected Skills:</h2>
      <ul>
        {selectedSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Select Skills:</h2>
      <div>
        {/* Renderiza a lista de habilidades e permite selecioná-las */}
        {/* Exemplo: */}
        <button onClick={() => handleSkillClick("Analytic Thinking")}>Analytic Thinking</button>
        <button onClick={() => handleSkillClick("Problem-Solving")}>Problem-Solving</button>
        {/* Adicione mais botões para outras habilidades conforme necessário */}
      </div>
    </div>
  );
};

export default SkillsComponent;