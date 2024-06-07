import React from "react";
const IntroPage = () => {
  // Função para redirecionar para a página de metas
  const goToHome = () => {
    window.location.href = "/home"; // Redireciona para a página de metas
  };

  return (
    <div
      className="flex h-screen 
      flex-col justify-center items-center px-6 pt-12
      bg-[#010101]"
    >
      <img src="/find.png" alt="Logo" className="mb-2" />

      <div className="text-center text-white mt-4">
        <h1 className="text-3xl text-center font-semibold px-2">
          Discover Top Talent
        </h1>

        <p className="mt-6 mb-4 text-center text-base font-medium">
          Streamline your recruitment process, connecting you with top talent to
          drive success.
        </p>
      </div>

      <button
        className="btn btn-neutral bg-[#DBEC72] rounded-3xl mr-2 text-black px-6 py-3 mt-6 "
        onClick={goToHome}
      >
        Let's get started!
      </button>
    </div>
  );
};

export default IntroPage;
