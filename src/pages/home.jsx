//src\pages\home.jsx
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const selectCareer = (career) => {
    router.push(`/chooseCandidate/${career}`);
  };

  return (
    <div>
      <button onClick={() => selectCareer("frontend")}>Frontend</button>
      <button onClick={() => selectCareer("backend")}>Backend</button>
      <button onClick={() => selectCareer("fullstack")}>Fullstack</button>
    </div>
  );
}

