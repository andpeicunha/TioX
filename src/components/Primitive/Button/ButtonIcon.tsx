import 'material-symbols/outlined.css'
import { ButtonIconProps } from './type'
import { buttonVariants } from './variants'

export default function ButtonIcon({ className, iconName }: ButtonIconProps) {
	return <span className={buttonVariants({ class: className })}>{iconName}</span>
}
