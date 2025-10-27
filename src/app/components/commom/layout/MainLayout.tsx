import { ReactNode } from 'react';
import { Header } from '../headers/Header';

interface MainLayoutProps {
  children: ReactNode;
  // Outras props do layout...
}

// ✨ Forma recomendada: Declaração de função e tipagem das props no argumento
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
     
      {/* ... classes de layout ... */}
      {children}
    </div>
  );
}