interface IButtonProps  {
  children:any
  onClick?: () => void
  bgcolor:string

}
export function Button({children,onClick,bgcolor: bgcolor}:IButtonProps){
    return (
       <>
          
              <button
                onClick={onClick}
                className={`w-full px-6 py-3 rounded-lg font-semibold bg-[${bgcolor}] text-white hover:bg-green-800`}
              >
            
                    {children}
              
              
              </button>
             
              </>
    )
}