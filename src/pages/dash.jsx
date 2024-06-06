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

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

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
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text p-4`}>
      <Navbar />
      <header className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          {isDarkMode ? 'Modo Escuro' : 'Modo Claro'}
        </h1>
        <ToggleSwitch isChecked={isDarkMode} onChange={toggleDarkMode} />
      </header>
      <div className="max-w-lg mx-auto">
        <LoginForm onSubmit={handleLogin} isDarkMode={isDarkMode} />
      </div>

      <div className="mt-12">
        {loading ? <Spinner /> : <ItemList items={items} isDarkMode={isDarkMode} />}
      </div>
      <Checkbox />

      <Button label={"Abrir modal"} onClick={openModal} isDarkMode={isDarkMode} />
      {/* Botão para abrir o modal */}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* Conteúdo do seu modal */}
        <h2>Título do Modal</h2>
        <p>
          Este é o conteúdo do modal. Você pode adicionar qualquer coisa aqui.
        </p>
        <Button label={"Fechar Modal"} onClick={closeModal} isDarkMode={isDarkMode} />
      </Modal>
    </div>
  );
}

export default Dash;