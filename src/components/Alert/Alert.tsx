import * as React from 'react'
import * as S from './Alert.styles'

type AlertProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export default function Alert({ children }: AlertProps): JSX.Element {
  return <S.Alert>{children}</S.Alert>
}
