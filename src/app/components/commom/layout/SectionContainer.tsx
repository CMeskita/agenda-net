interface SectionProps {
    children:any
     classname:string
}

export default function SectionContainer({children,classname}:SectionProps) {
  return (
         <div className='flex justify-center lg:flex sm:flex md:flex lg:m-4 lg:py-2 xs:py-24'>
        <div className={
            `p-2 border-2
             border-gray-200 border-dashed 
             rounded-lg dark:border-gray-700
            
              ${classname}`}>
        {children}
        </div>
       
    </div>
  );
}