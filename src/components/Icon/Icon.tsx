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
  CropOriginal,
  Edit,
  Remove,
  DeleteForever,
  RemoveRedEye
} from '@mui/icons-material'
import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
type IconListType = {
  [key: string]: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string }
}
const IconList: IconListType = {
  inbox: Inbox,
  chevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
  expandMore: ExpandMore,
  expandLess: ExpandLess,
  dashboard: Dashboard,
  person: Person,
  add: Add,
  list: List,
  cropOriginal: CropOriginal,
  remove: Remove,
  edit: Edit,
  delete: DeleteForever,
  eye: RemoveRedEye
}
type IconProps = {
  iconName: keyof IconListType
}
const Icon = ({ iconName, ...props }: IconProps) => {
  const Component = IconList[iconName]
  if (!Component) return null
  return (
    <div data-testid={`icon-component-${iconName}`}>
      <Component {...props} />
    </div>
  )
}

export default Icon
