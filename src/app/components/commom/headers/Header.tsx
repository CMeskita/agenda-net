import { Title } from "./Titulo";
interface IHeaderProps {
  children?: any;
  classname?:string;

}
export function Header ({children,classname}:IHeaderProps) {

  return (
     <header className={`w-full  max-w-7xl  mx-auto text-left py-2 bg-white ${classname} dark:bg-gray-800 dark:text-white rounded-lg transition-colors duration-300 `}>
    <Title classname="">{children}</Title>  

  </header>
  )
  
};