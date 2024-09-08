export function Input({
  type = 'text',
  placeholder,
  onChange,
}: {
  type: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className='pl-1 ring-1 ring-gray-300'
    />
  )
}
