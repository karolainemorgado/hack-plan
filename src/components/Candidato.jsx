import React from "react";
import candidateJSON from "../../data/candidate.json"

console.log(candidateJSON)


const Candidato = ({ candidate }) => {
  const {
    name,
    email,
    career,
    city,
    bio,
    profile_seen,
    softSkills,
    projects,
    description,
  } = candidate;

  const projectCount = candidate?.projects?.length || 0;

  return (
    <div className="candidato">
      <h2>{name}</h2>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Career:</strong> {career}
      </p>
      <p>
        <strong>City:</strong> {city}
      </p>
      <p>
        <strong>Bio:</strong> {bio}
      </p>
      <p>
        <strong>Profile Seen:</strong>  {profile_seen}
      </p>
      <p>
        <strong>Number of Projects:</strong> {projectCount}
      </p>
      
      <div>
        <h3>Projects:</h3>
        <ul>
          {projects?.map((project, index) => (
            <li key={index}>
              <strong>Project Name:</strong> {project.projectName} -
              <strong> Date:</strong> {project.projectDate} -
              <strong> Skills:</strong> {project.hardSkills.join(", ")}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1>About 
        </h1>
        {description}
      <p>
        <strong>Soft Skills:</strong> {softSkills?.join(", ")}
      </p>
      </div>
    </div>
  );
};

export default Candidato;