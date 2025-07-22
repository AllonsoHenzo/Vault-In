import Layout from '../components/Layout';
import {LockClosedIcon,EyeIcon,EyeSlashIcon,} from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Modal, Button } from 'flowbite-react';

const mockData = [
  { site: '2checkout.com', email: 'teste140@gmail.com', senha: 'senha123' },
  { site: '3cat.cat', email: 'teste140@gmail.com', senha: 'gato456' },
  { site: 'acobir.com', email: 'teste140@gmail.com', senha: 'acesso789' },
  { site: 'airbnb.com.pa', email: 'teste140@gmail.com', senha: 'airpa2025' },
  { site: 'alamy.com', email: 'teste140@gmail.com', senha: 'foto321' },
  { site: 'airfrance.com', email: 'teste140@gmail.com', senha: 'avião987' },
];

const Senhas = () => {
  const [selected, setSelected] = useState(null);
  const [copied, setCopied] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleCloseModal = () => {
    setSelected(null);
    setShowPassword(false); // resetar ao fechar o modal
    setCopied(false);
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 pt-6">
        <h1 className="text-2xl font-bold mb-6">Senhas</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {mockData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full">
                    <LockClosedIcon className="h-6 w-6 text-gray-800 dark:text-white" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.site}
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.email}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelected(item)}
                  className="p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                >
                  <EyeIcon className="h-5 w-5 text-gray-700 dark:text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal com informações */}
        <Modal
          show={!!selected}
          onClose={handleCloseModal}
          size="md"
          popup
          className="!p-0 !m-0"
        >
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-xl bg-white dark:bg-gray-800 rounded-xl shadow-xl z-50 p-6 text-center">
            {selected && (
              <>
                <LockClosedIcon className="h-10 w-10 mx-auto text-gray-700 dark:text-white mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selected.site}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300 mt-2">
                  <strong>Email:</strong> {selected.email}
                </p>

                {/* Senha com botão de visualização */}
                <div className="flex items-center justify-center mt-2 gap-2">
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    <strong>Senha:</strong>{' '}
                    <span className="font-mono font-semibold">
                      {showPassword
                        ? selected.senha
                        : '•'.repeat(selected.senha.length)}
                    </span>
                  </p>
                  <button
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    title={showPassword ? 'Ocultar' : 'Mostrar'}
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5 text-gray-700 dark:text-white" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-700 dark:text-white" />
                    )}
                  </button>
                </div>

                <div className="mt-4 flex justify-center gap-4">
                  <Button color="gray" onClick={handleCloseModal}>
                    Fechar
                  </Button>
                  <Button
                    color="blue"
                    onClick={() => handleCopy(selected.senha)}
                  >
                    {copied ? 'Copiado!' : 'Copiar senha'}
                  </Button>
                </div>
              </>
            )}
          </div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Senhas;
