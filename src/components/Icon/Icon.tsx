import {
  ExpandLess,
  ExpandMore,
  ChevronLeft,
  ChevronRight,
  Inbox,
  Dashboard,
  Person,
  Add,
  List,
  CropOriginal
} from '@mui/icons-material'

const IconList = {
  inbox: Inbox,
  chevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
  expandMore: ExpandMore,
  expandLess: ExpandLess,
  dashboard: Dashboard,
  person: Person,
  add: Add,
  list: List,
  cropOriginal: CropOriginal
}

const Icon = ({ iconName, ...props }) => {
  const Component = IconList[iconName]
  return <Component {...props} />
}

export default Icon
