import * as React from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className = '', ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-teal-400 text-slate-900 hover:bg-teal-300 focus-visible:ring-teal-400 ${className}`}
				{...props}
			/>
		)
	}
)

Button.displayName = 'Button'