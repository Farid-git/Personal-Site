export function TextBox(props) {
  return (
    <div className="
      p-6
      border-4 border-pastel-dark-blue
      bg-pastel-cream
      text-pastel-dark-blue
      sm:text-sm md:text-lg
      max-w-6xl
      text-left">

      {props.children}

    </div>

  )
}