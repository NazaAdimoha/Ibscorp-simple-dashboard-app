import { forwardRef } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface InputProps {
  label: string
  error?: string
  className?: string
}

export const Input = forwardRef<
  HTMLInputElement,
  InputProps & ReturnType<UseFormRegister<any>>
>(({ label, error, className, ...props }, ) => (
  <div className={`space-y-2 ${className}`}>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      className={`w-full px-4 py-3 rounded-lg border ${
        error ? 'border-danger' : 'border-gray-700'
      } focus:ring-2 focus:ring-primary-light focus:border-primary-light`}
      {...props}
    />
    {error && <p className="text-danger text-sm">{error}</p>}
  </div>
))