import { FC, useState, Fragment } from 'react'
import { styled, Theme, CSSObject, useTheme } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import List from '@mui/material/List'
import { Collapse, IconButton } from '@mui/material'
import { menuList } from '@/constants'
import Icon from '../Icon/Icon'
import { useRouter } from 'next/navigation'

interface DrawerProps {
  open: boolean
  onClose: () => void
}

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
})

const DrawerHeaderStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}))

const DrawerStyled = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}))

const Drawer: FC<DrawerProps> = ({ open, onClose }) => {
  const theme = useTheme()
  const [menuItemsOpen, setMenuItemsOpen] = useState<Array<string>>([])
  const router = useRouter()

  const onClickOnSubItem = (key: string) => {
    if (menuItemsOpen.find((mi: string) => key === mi) !== undefined) {
      setMenuItemsOpen(menuItemsOpen.filter((mi: string) => mi !== key))
    } else {
      setMenuItemsOpen([...menuItemsOpen, key])
    }
  }

  const renderItem = ({ title, path, openItem, onClick, key, icon, isSubItem = false, hasSubItem = false }) => {
    return (
      <ListItemButton
        onClick={() => onClick(path)}
        key={key}
        sx={{ pl: isSubItem ? 4 : 2, minHeight: 48, justifyContent: open ? 'initial' : 'center' }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center'
          }}
        >
          <Icon iconName={icon} />
        </ListItemIcon>
        <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
        {open && hasSubItem && <Icon iconName={openItem ? 'expandLess' : 'expandMore'} />}
      </ListItemButton>
    )
  }

  return (
    <DrawerStyled variant='permanent' open={open}>
      <DrawerHeaderStyled>
        <IconButton onClick={onClose}>
          <Icon iconName={theme.direction === 'rtl' ? 'chevronRight' : 'chevronLeft'} />
        </IconButton>
      </DrawerHeaderStyled>
      <List>
        {menuList.map((menu, index) => {
          const { path, title, items, icon } = menu
          if (items !== undefined) {
            const openItem = menuItemsOpen.find((mi: string) => path === mi) !== undefined
            return (
              <Fragment key={`${path}-${index}`}>
                {renderItem({
                  title,
                  path,
                  openItem,
                  onClick: () => {
                    onClickOnSubItem(path)
                  },
                  key: `${path}-${index}`,
                  hasSubItem: true,
                  icon
                })}
                {open && (
                  <Collapse in={openItem} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                      {items.map((subItem, subItemIndex) =>
                        renderItem({
                          title: subItem.title,
                          path: subItem.path,
                          openItem,
                          onClick: () => {
                            router.push(`${path}${subItem.path}`)
                          },
                          key: `${subItem.path}-${subItemIndex}`,
                          isSubItem: true,
                          icon: subItem.icon
                        })
                      )}
                    </List>
                  </Collapse>
                )}
              </Fragment>
            )
          } else {
            return (
              <ListItem key={`${title}-${index}`} disablePadding sx={{ display: 'block' }}>
                {renderItem({
                  title,
                  path,
                  onClick: () => {
                    router.push(path)
                  },
                  key: `item-${title}-${index}`,
                  openItem: false,
                  icon
                })}
              </ListItem>
            )
          }
        })}
      </List>
    </DrawerStyled>
  )
}

export default Drawer
