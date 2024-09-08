const Boton = ({ children, className = "", ...args }) => {
  return (
    <button
      className={`rounded-x1 py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white text-center ${className}`}
      {...args}
    >
      {children}
    </button>
  )
}

export default Boton
