
export function Footer() {
  return (
    <footer 
      className="
                   /* Torna o footer fixo na viewport */
        bottom-0          /* Alinha à parte inferior */
        w-full            /* Garante largura total */
        z-10              /* Garante que fique acima de outros elementos (opcional, mas recomendado) */
        
        /* Estilos e Cores */
        bg-white          /* Fundo branco (para cobrir o conteúdo que passa por baixo) */
        dark:bg-gray-900  /* Fundo escuro no modo escuro */
        border-t border-gray-200 dark:border-gray-700 /* Linha sutil no topo */
        py-4              /* Padding vertical ajustado para fixo */
        
        /* Conteúdo do Texto */
        text-center 
        text-sm 
        text-gray-500 
        dark:text-gray-400
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>© 2026 - AgendaNet. Todos os direitos reservados.</p>
        <a 
          href="#" 
          className="
            text-indigo-600 
            dark:text-indigo-400 
            hover:underline 
            block 
            mt-1
          "
        >
          Política de Privacidade
        </a>
      </div>
    </footer>
  );
};