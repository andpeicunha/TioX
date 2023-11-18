import ButtonIcon from './ButtonIcon'
import ButtonRoot from './ButtonRoot'
import { ButtonIconProps, ButtonRootsProps } from './type'

export function Button({ iconName, children }: ButtonIconProps & ButtonRootsProps) {
	return (
		<ButtonRoot>
			<ButtonIcon iconName={iconName} />
			{children}
		</ButtonRoot>
	)
}
