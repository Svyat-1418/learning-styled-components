import {FC, ReactNode} from "react";
import {ButtonStyled} from "./Button.styled";

export type TButton = {
  primary?: boolean
  children: ReactNode
};
export const Button: FC<TButton> = ({children, primary}) => {
  return (
    <ButtonStyled primary={primary}>
      {children}
    </ButtonStyled>
  )
}