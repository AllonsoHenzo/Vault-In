import Layout from '../components/Layout';
import { LockClosedIcon } from '@heroicons/react/24/solid';

const mockData = [
  { site: '2checkout.com', email: 'teste140@gmail.com' },
  { site: '3cat.cat', email: 'teste140@gmail.com' },
  { site: 'acobir.com', email: 'teste140@gmail.com' },
  { site: 'airbnb.com.pa', email: 'teste140@gmail.com' },
  { site: 'alamy.com', email: 'teste140@gmail.com' },
  { site: 'airfrance.com', email: 'teste140@gmail.com' },
];

const Senhas = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 pt-6">
        <h1 className="text-2xl font-bold mb-6">Senhas</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {mockData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm transition hover:shadow-md cursor-pointer"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Senhas;
