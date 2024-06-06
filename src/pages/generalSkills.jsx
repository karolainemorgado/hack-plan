import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "@/components/basics/Button";

function GeneralSkills() {
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

  const [activeView, setActiveView] = useState("softSkill");
  const router = useRouter();

  const handleSkillClick = (skills, setSkills, index) => {
    setSkills(
      skills.map((skill, i) => ({
        ...skill,
        checked: i === index ? !skill.checked : skill.checked,
      }))
    );
  };

  const handleContinue = () => {
    const selectedSoftSkills = softSkill.filter((skill) => skill.checked);
    const selectedHardSkills = hardSkill.filter((skill) => skill.checked);

    if (selectedSoftSkills.length + selectedHardSkills.length < 5) {
      alert("Please select at least 5 skills.");
      return;
    }

    const selectedSkills = {
      skills: [...selectedSoftSkills, ...selectedHardSkills].map(
        (skill) => skill.name
      ),
    };

    console.log("Selected Skills: ", selectedSkills.skills);

    // Aqui você navegará para a próxima etapa ou enviará as habilidades selecionadas
  };

  const handleButtonClick = () => {
    if (activeView === "softSkill") {
      setActiveView("hardSkill");
    } else {
      handleContinue();
    }
  };

  return (
    <div className="bg-gradient-to-b from-mainBgGradientStart via-mainBgGradientMiddle to-mainBgGradientEnd min-h-screen flex flex-col justify-between p-6 text-white">
      <div>
        {activeView === "softSkill" ? (
          <>
            <div className="text-left mt-20">
              <h1 className="text-4xl font-semibold">
                Select Your Soft Skills
              </h1>
              <p className="text-base font-medium mt-6">
                Identify your specific skills in communication, teamwork,
                problem-solving, and more.
              </p>
              <p className="text-base font-normal mt-2">
                Select at least 5 skills.
              </p>
            </div>
            <div className="flex flex-wrap mt-12">
              {softSkill.map((skill, index) => (
                <div
                  key={index}
                  onClick={() =>
                    handleSkillClick(softSkill, setSoftSkill, index)
                  }
                  className={`flex flex-wrap p-2 px-3 my-2 mx-1 rounded-full cursor-pointer text-base font-medium ${
                    skill.checked ? "bg-violet-900" : "bg-[#261E3B]"
                  } text-white`}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="text-left mt-6">
              <h1 className="text-4xl font-semibold">Select Your Hard Skills</h1>
              <p className="text-base font-medium mt-6">
                Identify your technical skills in programming and development.
              </p>
              <p className="text-base font-normal mt-2">
                Select at least 5 skills.
              </p>
            </div>
            <div className="flex flex-wrap mt-2">
              {hardSkill.map((skill, index) => (
                <div
                  key={index}
                  onClick={() =>
                    handleSkillClick(hardSkill, setHardSkill, index)
                  }
                  className={`flex flex-wrap p-2 px-3 my-2 mx-1 rounded-full cursor-pointer text-base font-medium ${
                    skill.checked ? "bg-violet-900" : "bg-[#261E3B]"
                  } text-white`}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Button
        label={activeView === "softSkill" ? "Continue" : "Submit Skills"}
        onClick={handleButtonClick}
      />
    </div>
  );
}

export default GeneralSkills;
