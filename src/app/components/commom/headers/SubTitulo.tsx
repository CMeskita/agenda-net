interface SubTitleProps {
  children?: any;

}

export function SubTitle ({children}:SubTitleProps) {

  return (
    <>
     <p className="text-lg mb-0 border-b text-black font-light pb- border-gray-300 dark:border-gray-600">
       {children}
    </p>
    </>
   

  )
  
};