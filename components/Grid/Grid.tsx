

type Props = {
  title: string
  className?: string
  children: React.ReactNode
}

const Grid: React.FC<Props> = ({ title, children, className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-bold pb-4">{title}</h2>
      <div className="grid grid-cols-auto-fill gap-8">{children}</div>
    </div>
  )
}

export default Grid