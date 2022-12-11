import {TitleStyled} from "./Title.styled";
import {FC, ReactNode} from "react";

type TTitle = {
  children: ReactNode
}

export const Title: FC<TTitle> = ({children}) => {
  return (
    <TitleStyled>
      {children}
    </TitleStyled>
  )
}