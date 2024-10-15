export function Input({
  id,
  type = 'text',
  placeholder,
  onChange,
  value,
}: {
  id: string
  type: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className='pl-1 ring-1 ring-gray-300'
    />
  )
}
