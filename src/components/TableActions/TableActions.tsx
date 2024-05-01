import * as React from 'react'
import { useRouter } from 'next/navigation'
import { TableActionsStyled } from './TableActions.styled'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'

type TableActionsProps = {
  viewPath: string
  onClickDelete: () => void
}
const TableActions = ({ viewPath, onClickDelete }: TableActionsProps) => {
  const { push } = useRouter()
  return (
    <TableActionsStyled data-testid='TableActions-component'>
      <Button size='small' icon onClick={() => push(viewPath)}>
        <Icon iconName={'eye'} />
      </Button>
      <Button size='small' icon onClick={() => onClickDelete()}>
        <Icon iconName={'delete'} />
      </Button>
    </TableActionsStyled>
  )
}

export default TableActions
