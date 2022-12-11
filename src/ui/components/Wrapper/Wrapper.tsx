import {FC, ReactNode} from "react";
import {WrapperStyled} from "./Wrapper.styled";

type TWrapper = {
  children: ReactNode
}

export const Wrapper: FC<TWrapper> = ({children}) => {
  return (
    <WrapperStyled>
      {children}
    </WrapperStyled>
  )
}