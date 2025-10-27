interface IButtonProps  {
  //children:any
  onClick?: () => void
  bgcolor:string

}
export function ButtonPlus({onClick,bgcolor: bgcolor}:IButtonProps){
    return (
       <>
         <a href="/pages/menu">
              <button
                onClick={onClick}
                className={`w-15 h-15 rounded-full font-semibold bg-[${bgcolor}] text-white hover:bg-green-800`}
              >           
               +              
              </button>
            </a>
              </>
    )
}