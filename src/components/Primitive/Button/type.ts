import { ButtonHTMLAttributes, ReactNode } from 'react'
import { VariantProps } from 'tailwind-variants'
import { buttonVariants } from './variants'

export type ButtonRootsProps = ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants> & {
		children: ReactNode
	}

export type ButtonIconProps = {
	/**
	 * Inclua o nome do icone, deve ser o padrão do Material Icon do Google https://fonts.google.com/icons?hl=pt-br
	 */
	iconName: string
	className?: string
}
