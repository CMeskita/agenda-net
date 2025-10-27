interface ICardsProps  {
  children:any
  classname:string

}
export function Cards({children,classname}:ICardsProps){
  return (
           <div className={`p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2 ${classname}`} >
             {children}
              
              </div>
  )
}