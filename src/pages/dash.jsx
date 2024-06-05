import React, { useState, useEffect } from "react";
import Navbar from "@/components/basics/Navbar";
import LoginForm from "@/components/basics/LoginForm";
import ItemList from "@/components/basics/ItemList";
import { items } from "../../data/mockData";
import Spinner from "@/components/basics/Spinner";
import Checkbox from "@/components/basics/Checkbox";
import ToggleSwitch from "@/components/basics/ToggleSwitch ";
import Modal from "@/components/basics/Modal";
import Button from "@/components/basics/Button";

function Dash() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Simula uma requisição de API com um atraso de 2 segundos
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleLogin = (data) => {
    console.log("Login data:", data);
  };

  return (
    <div>
      <Navbar />

      <div className="container mx-auto px-4 py-8
      {isDarkMode ? 'dark' : ''}">
        <header>
        <h1>{isDarkMode ? 'Modo Escuro' : 'Modo Claro'}</h1>
        <ToggleSwitch isChecked={isDarkMode} onChange={toggleDarkMode} />
      </header>
        <div className="max-w-lg mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            Bem-vindo ao meu projeto Next.js com Tailwind CSS
          </h1>
          <LoginForm onSubmit={handleLogin} />
        </div>

        <div className="mt-12">
          {loading ? <Spinner /> : <ItemList items={items} />}
        </div>
        <Checkbox />

        <Button label={"Abrir modal"} onClick={openModal} />
        {/* Botão para abrir o modal */}

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {/* Conteúdo do seu modal */}
          <h2>Título do Modal</h2>
          <p>
            Este é o conteúdo do modal. Você pode adicionar qualquer coisa aqui.
          </p>
          {/* <Button onClick={closeModal}>Fechar Modal</Button>  */}
          {/* Botão para fechar o modal */}
          <Button label={"Fechar Modal"} onClick={closeModal} />
        </Modal>
      </div>
    </div>
  );
}

export default Dash;
