import { ButtonHTMLAttributes, ReactNode } from 'react'
import { VariantProps } from 'tailwind-variants'
import { buttonVariants } from './variants'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants> & {
		children: ReactNode
	}

export function Button({ children, variant, size, ...rest }: ButtonProps) {
	return (
		<button
			className={buttonVariants({ variant, size })}
			onClick={rest.onClick}
			onFocus={rest.onFocus}
		>
			{children}
		</button>
	)
}
