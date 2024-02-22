import { ButtonRootsProps } from "./type";
import { buttonVariants } from "./variants";

export default function ButtonRoot({
  children,
  buttonColor,
  buttonSize,
  className,
}: ButtonRootsProps) {
  return (
    <button
      className={buttonVariants({ buttonColor, buttonSize, class: className })}>
      {children}
    </button>
  );
}
