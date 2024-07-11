export function Button({ children }) {
    return (
      <button
        className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
        border-blue-600
        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] 
        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" 
        >
        {children}
      </button>
    );
  }


  export function LoginButton({ children }) {
    return (
      <button
        className="cursor-pointer transition-all 
        bg-blue-900 text-white px-6 py-2 rounded-lg
        border-blue-400
        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] 
        active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-lg hover:shadow-blue-300 shadow-blue-300 active:shadow-none" 
        >
        {children}
      </button>
    );
  }




  
  export default Button