import { FC, ReactNode } from 'react'
import { ModalStyled } from './Modal.styled'

type ModalProps = { children: ReactNode }
const Modal: FC<ModalProps> = ({ children }) => {
  return <ModalStyled data-testid='modal-component'>{children}</ModalStyled>
}

export default Modal
