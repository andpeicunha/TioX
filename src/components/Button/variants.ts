import { tv } from 'tailwind-variants'

export const buttonVariants = tv({
	base: 'bg-primary-base px-3 py-2 rounded-md font-medium text-white active:opacity-80',
	variants: {
		variant: {
			primary: 'bg-primary-base text-white',
			secondary: 'bg-secondary-base text-white',
		},
		size: {
			sm: 'text-sm',
			md: 'text-base',
			lg: 'px-4 py-3 text-lg',
		},
	},
	compoundVariants: [{}],
	defaultVariants: {
		size: 'sm',
		color: 'primary',
	},
})
