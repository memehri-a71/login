export const HelperText = ({ children, className }: any): JSX.Element => {
  return (
    <span className={`text-red-600 text-xs ml-auto ${className}`}>
      {children}
    </span>
  )
}
