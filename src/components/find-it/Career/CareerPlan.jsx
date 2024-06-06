import React from "react";

const CareerPlan = ({ careerPlanData, loading, careerName }) => {
  const renderSkillsList = (category) => (
    <div key={category}>
      <h2 className="text-xl font-medium mb-4 mt-6">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h2>
      {careerPlanData[category].map((skill, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="checkbox"
            id={`${category}-${index}`}
            className="mr-4 custom-checkbox"
            checked={skill.checked}
            disabled={skill.checked}
            // Adicione um callback para a seleção da habilidade
            onChange={() => {}}
          />
          <label htmlFor={`${category}-${index}`} className="text-l">
            {skill.name}
          </label>
        </div>
      ))}
    </div>
  );

  if (loading) {
    return <div>Loading career plan...</div>;
  }

  if (!careerPlanData) {
    return <div>Failed to fetch career plan.</div>;
  }

  return (
    <div className="text-white bg-neutral-900 rounded-3xl p-10">
      <img
        src="/img-career-plan.svg"
        alt="Logo"
        className="mb-2 mx-auto block"
      />
      <h1 className="text-2xl font-medium mb-1 text-center">Career Plan</h1>
      <h2 className="text-xl font-medium mb-10 text-center">
        {careerName}
      </h2>

      {renderSkillsList("essentials")}
      {renderSkillsList("intermediate")}
      {renderSkillsList("advanced")}
    </div>
  );
};

export default CareerPlan;
