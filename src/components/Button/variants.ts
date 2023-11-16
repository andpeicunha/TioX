import { tv } from 'tailwind-variants'

export const buttonVariants = tv({
	base: 'bg-primary-base px-3 py-2 rounded-md font-medium text-white active:opacity-80',
	variants: {
		buttonColor: {
			primary: 'bg-primary-base',
			warning: 'bg-secondary-base',
		},
		buttonSize: {
			sm: 'text-sm',
			md: 'text-base',
			lg: 'px-4 py-3 text-lg',
		},
	},
	defaultVariants: {
		buttonSize: 'sm',
		buttonColor: 'primary',
	},
})
