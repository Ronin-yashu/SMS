import React from 'react'

const InputField = ({ label, error, children, required = false }) => {
  return (
    <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        {children}
        {error && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1 animate-shake">
                <span className="inline-block w-1 h-1 bg-red-600 rounded-full" />
                {error.message}
            </p>
        )}
    </div>
  )
}

export default InputField
