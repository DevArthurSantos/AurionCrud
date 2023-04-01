import { ReactNode } from "react"
import * as S from "./styled"


export enum IconsOptionSizing {
  small = "1rem",
  smallPlus = "1.5rem",
  midium = "2rem",
  midiumPlus = "2.5rem",
  big = "3rem",
  bigPlus = "3.5rem"
}
export enum IconsOptionWarp {
  noWarp = "nowarp",
  warp = "warp",
}
export enum IconsOptionDirection{
  row = "row",
  column = "column",
}


export type IconsButtonsProps = {
  children: ReactNode
  sizing?: IconsOptionSizing
  warp?: IconsOptionWarp
  direction?: IconsOptionDirection
}

export default function IconsButtons({ 
  sizing = IconsOptionSizing.small, 
  warp = IconsOptionWarp.noWarp, 
  direction = IconsOptionDirection.row, 
  children }: IconsButtonsProps) {

  return (
    <>
      <S.Div 
      warp={warp}
      direction={direction}
      sizing={sizing}>
        {children}
      </S.Div>
    </>)
}