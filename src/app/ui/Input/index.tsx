export function Input({
  type = 'text',
  placeholder,
  onChange,
  value,
}: {
  type: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className='pl-1 ring-1 ring-gray-300'
    />
  )
}
