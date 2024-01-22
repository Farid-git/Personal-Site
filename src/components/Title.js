export function Title(props) {
  return (
    <div className="
      p-2
      bg-pastel-cream
      border-4 border-pastel-dark-blue
      sm:text-2xl md:text-3xl">
      <h1 className="font-bold">{props.title}</h1>
    </div>
  )
}