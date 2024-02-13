export function TextBox(props) {
  return (
    <div className="
      p-4
      border-4 border-pastel-dark-blue
      bg-pastel-cream bg-opacity-80
      text-pastel-dark-blue sm:text-sm text-left
      w-full">

      {props.children}

    </div>

  )
}