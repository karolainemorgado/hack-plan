import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Button from "@/components/Button";
// import withAuth from "@/components/Auth/withAuth";

function GeneralSkills() {
  const [user, setUser] = useState(null);
  const [skills, setSkills] = useState([
    { name: "JavaScript", checked: false },
    { name: "React", checked: false },
    { name: "CSS", checked: false },
    { name: "HTML", checked: false },
    // Adicionar mais habilidades conforme necessário
  ]);

  const router = useRouter();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      router.push("/auth");
    }
  }, [router]);

  const handleSkillClick = (index) => {
    setSkills(skills.map((skill, i) => ({
      ...skill,
      checked: i === index ? !skill.checked : skill.checked,
    })));
  };

  const handleSubmit = async () => {
    const selectedSkills = skills.filter((skill) => skill.checked).map((skill) => skill.name);

    if (selectedSkills.length < 5) {
      alert("Please select at least 5 skills.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }

      await axios.post("/api/matchSkills", {
        selectedSkills,
        userId: user._id,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      router.push("/matchResults");
    } catch (error) {
      console.error("Error submitting skills:", error);
      alert("Failed to continue. Please try again later.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-mainBgGradientStart via-mainBgGradientMiddle to-mainBgGradientEnd min-h-screen flex flex-col justify-between p-6 text-white">
      <div>
        <div className="text-left mt-20">
          <h1 className="text-4xl font-semibold">Select Your Skills</h1>
          <p className="text-base font-medium mt-6">
            Identify your specific skills to find the best job matches.
          </p>
          <p className="text-base font-normal mt-2">Select at least 5 skills.</p>
        </div>
        <div className="flex flex-wrap mt-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              onClick={() => handleSkillClick(index)}
              className={`flex flex-wrap p-2 px-3 my-2 mx-1 rounded-full cursor-pointer text-base font-medium ${skill.checked ? "bg-violet-900" : "bg-[#261E3B]"} text-white`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
      <Button
        label="Find Matches"
        onClick={handleSubmit}
      />
    </div>
  );
}

export default GeneralSkills()

// export default withAuth(GeneralSkills);
