import Navbar from '@/components/basics/Navbar';
import LoginForm from '@/components/basics/LoginForm';
import ItemList from '@/components/basics/ItemList';
import { items } from '../../data/mockData';

function Dash() {

    const items = [
        { id: 1, title: 'Item 1', description: 'Descrição do Item 1' },
        { id: 2, title: 'Item 2', description: 'Descrição do Item 2' },
      ];
    
      const handleLogin = (data) => {
        console.log('Login data:', data);
      };
    
      return (
        <div>
          <Navbar />
          <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center">Bem-vindo ao meu projeto Next.js com Tailwind CSS</h1>
            <LoginForm onSubmit={handleLogin} />
            <ItemList items={items} />
          </div>
        </div>
      );
    }

export default Dash