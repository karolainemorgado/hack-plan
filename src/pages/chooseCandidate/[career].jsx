import React, { useEffect, useState } from "react";
import candidatesData from "../../../data/candidate.json"; // Importe o arquivo JSON com os dados dos candidatos
import Button from "@/components/basics/Button";
import { useRouter, useParams } from "next/navigation";
import Accordion from "@/components/Accordion";

function ChooseCandidate() {
  const router = useRouter();
  const params = useParams();

  const selectedCareer = params?.career;

  const [softSkill, setSoftSkill] = useState([
    { name: "Analytic Thinking", checked: false },
    { name: "Problem-Solving", checked: false },
    { name: "Logical Thinking", checked: false },
    { name: "Data Interpretation", checked: false },
    { name: "Attention to Detail", checked: false },
    { name: "Self-learning", checked: false },
    { name: "Technical Support", checked: false },
    { name: "Documentation", checked: false },
    { name: "Patience", checked: false },
    { name: "Accountability", checked: false },
    { name: "Adaptability", checked: false },
    { name: "Communication", checked: false },
    { name: "Team Collaboration", checked: false },
    { name: "Time Management", checked: false },
    { name: "Critical Thinking", checked: false },
    { name: "Debugging", checked: false },
    { name: "User Advocacy", checked: false },
    { name: "Conflict Resolution", checked: false },
    { name: "Project Management", checked: false },
  ]);

  const [hardSkill, setHardSkill] = useState([
    { name: "JavaScript", checked: false },
    { name: "Python", checked: false },
    { name: "Java", checked: false },
    { name: "C#", checked: false },
    { name: "Ruby", checked: false },
    { name: "PHP", checked: false },
    { name: "React", checked: false },
    { name: "Angular", checked: false },
    { name: "Vue.js", checked: false },
    { name: "Node.js", checked: false },
    { name: "Django", checked: false },
    { name: "Flask", checked: false },
    { name: "Spring Boot", checked: false },
    { name: "Ruby on Rails", checked: false },
    { name: "ASP.NET", checked: false },
    { name: "Laravel", checked: false },
    { name: "Express.js", checked: false },
    { name: "MongoDB", checked: false },
    { name: "MySQL", checked: false },
    { name: "PostgreSQL", checked: false },
    { name: "HTML", checked: false },
    { name: "CSS", checked: false },
    { name: "TypeScript", checked: false },
    { name: "Bootstrap", checked: false },
    { name: "Sass", checked: false },
    { name: "jQuery", checked: false },
    { name: "SQL", checked: false },
    { name: "NoSQL", checked: false },
    { name: "SQLite", checked: false },
    { name: "Redis", checked: false },
    { name: "Oracle", checked: false },
    { name: "DynamoDB", checked: false },
    { name: "Swift", checked: false },
    { name: "Kotlin", checked: false },
    { name: "TensorFlow", checked: false },
    { name: "PyTorch", checked: false },
    { name: "Git", checked: false },
    { name: "Docker", checked: false },
    { name: "AWS", checked: false },
    { name: "Azure", checked: false },
    { name: "Google Cloud Platform", checked: false },
  ]);

  // Lista de candidatos filtrados de acordo com a carreira
  const [candidatesByCareer, setCandidatesByCareer] = useState([]);

  // Lista de candidatos filtrados por carreira + skills. Esse é o state que precisa mostrar na tela
  const [filteredCandidates, setFilteredCandidates] = useState([]);

  useEffect(() => {
    const filteredCandidates = candidatesData.filter((candidate) => {
      if (selectedCareer === "frontend") {
        return candidate.career === "Frontend Developer";
      }
      if (selectedCareer === "backend") {
        return candidate.career === "Backend Developer";
      }
      if (selectedCareer === "fullstack") {
        return candidate.career === "Fullstack Developer";
      }
    });

    setCandidatesByCareer(filteredCandidates);
    setFilteredCandidates(filteredCandidates);
  }, [selectedCareer]);

  const handleSkillClick = (skills, setSkills, index) => {
    setSkills(
      skills.map((skill, i) => ({
        ...skill,
        checked: i === index ? !skill.checked : skill.checked,
      }))
    );
  };

  const filterCandidates = () => {
    // Lógica para comparar as habilidades selecionadas com as habilidades dos candidatos
    const selectedSkills = [...softSkill, ...hardSkill]
      .filter((skill) => skill.checked)
      .map((skill) => skill.name);

    // Aqui você pode realizar a comparação com os dados dos candidatos e tomar as medidas necessárias
    const matchedCandidates = candidatesByCareer
      .map((candidate) => {
        const candidateSkills = candidate.general_skills;
        const filteredSkills = selectedSkills.filter((skill) =>
          candidateSkills.includes(skill)
        );
        return { ...candidate, matchedSkills: filteredSkills.length };
      })
      .filter((candidate) => candidate.matchedSkills > 0)
      .sort((a, b) => b.matchedSkills - a.matchedSkills);

    console.log(
      "Candidatos que possuem as habilidades selecionadas:",
      matchedCandidates
    );

    setFilteredCandidates(matchedCandidates);
  };

  const selectCandidate = (id) => {
    router.push(`/candidate/${id}`);
  };

  return (
    <div>
      {/* <div>
        <h1>Hello Fulaninha </h1>
      </div> */}

      {/* <div className="">
<p>Skills</p>

<Accordion>


</Accordion>

</div> */}

      <div className="bg-gradient-to-b from-mainBgGradientStart via-mainBgGradientMiddle to-mainBgGradientEnd min-h-screen flex flex-col justify-between p-6 text-white">
        <div>
          <div className="flex flex-wrap mt-12">
            {softSkill.map((skill, index) => (
              <div
                key={index}
                onClick={() => handleSkillClick(softSkill, setSoftSkill, index)}
                className={`flex flex-wrap p-2 px-3 my-2 mx-1 rounded-full cursor-pointer text-base font-medium ${
                  skill.checked ? "bg-violet-900" : "bg-[#261E3B]"
                } text-white`}
              >
                {skill.name}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap mt-2">
            {hardSkill.map((skill, index) => (
              <div
                key={index}
                onClick={() => handleSkillClick(hardSkill, setHardSkill, index)}
                className={`flex flex-wrap p-2 px-3 my-2 mx-1 rounded-full cursor-pointer text-base font-medium ${
                  skill.checked ? "bg-violet-900" : "bg-[#261E3B]"
                } text-white`}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
        <Button label={"Filter"} onClick={filterCandidates} />
      </div>

      <div>
        {filteredCandidates.map((candidate) => (
          <div key={candidate._id}>
            <p onClick={() => selectCandidate(candidate._id)}>
              {candidate.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseCandidate;
