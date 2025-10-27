import { ReactNode } from 'react';

// 1. Tipagem com TypeScript (mantida)
interface ContentContainerProps {
  children: ReactNode;
  layoutType?: 'flex' | 'grid'; 
  className?: string; // Para classes que o usuário queira adicionar
}

// 2. Uso da Function Declaration padrão (mais limpa)
export default function ContentContainer({ 
  children, 
  layoutType = 'flex',
  className = '', 
}: ContentContainerProps) {
  
  // 3. Classes base (estilos do próprio container)
  const baseStyles = `
    w-full 
    min-h-screen 
    max-w-7xl        /* Largura máxima do container */
    mx-auto          /* Centraliza horizontalmente */ 
    p-6               /* Padding padrão (ajustado de p-4/p-6 para um valor fixo limpo) */
    lg:p-8            /* Mais padding em telas grandes */
    bg-white 
    dark:bg-gray-800 
    shadow-lg         /* Sombra padrão */
    transition-colors 
    duration-300
  `;

  // 4. Classes específicas de layout (organização dos filhos)
  let layoutStyles = '';

  if (layoutType === 'flex') {
    layoutStyles = `
      flex flex-col 
      space-y-6 
      md:space-y-8
    `;
  } else if (layoutType === 'grid') {
    layoutStyles = `
      grid 
      grid-cols-1 
      sm:grid-cols-2    /* Colunas em telas sm */
      lg:grid-cols-3    /* Colunas em telas lg */
      gap-6             /* Espaço entre as células do grid */
    `;
  }

  // 5. Combinação e Renderização
  return (
    // Usa template literals para combinar os estilos do container, 
    // os estilos de layout E as classes adicionais passadas pelo usuário (className).
    <div className={`${baseStyles} ${layoutStyles} ${className}`}>
      {children}
    </div>
  );
}