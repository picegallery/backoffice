import { FC, ReactNode, useState } from 'react'
import { TabsContainerStyled } from './Tabs.styled'
import { Box } from '@mui/material'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

export type TabItem = {
  label: string
  content: ReactNode
  disabled?: boolean
}
type TabProps = { items: TabItem[]; ariaLabel?: string }
const Tabs: FC<TabProps> = ({ items, ariaLabel }) => {
  const [currentTab, setCurrentTab] = useState('0')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue)
  }

  return (
    <TabsContainerStyled data-testid='tabs-component'>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={currentTab}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label={ariaLabel}>
              {items.map((item, itemIndex) => (
                <Tab
                  label={item.label}
                  value={itemIndex.toString()}
                  key={itemIndex.toString()}
                  disabled={item.disabled}
                />
              ))}
            </TabList>
          </Box>
          {items.map((item, itemIndex) => (
            <TabPanel value={itemIndex.toString()} key={itemIndex.toString()}>
              {item.content}
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    </TabsContainerStyled>
  )
}

export default Tabs
