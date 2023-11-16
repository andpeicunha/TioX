import { ButtonHTMLAttributes, ReactNode } from 'react'
import { VariantProps } from 'tailwind-variants'
import { buttonVariants } from './variants'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants> & {
		children: ReactNode
	}
