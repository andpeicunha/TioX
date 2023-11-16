import { ButtonProps } from './type'
import { buttonVariants } from './variants'

export function Button({ children, buttonColor, buttonSize, ...rest }: ButtonProps) {
	return (
		<button
			className={buttonVariants({ buttonColor, buttonSize })}
			onClick={rest.onClick}
			onFocus={rest.onFocus}
		>
			{children}
		</button>
	)
}
