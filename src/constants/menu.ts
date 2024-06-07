export const menuList = [
  {
    path: '/dashboard/home',
    title: 'Dashboard',
    icon: 'dashboard'
  },
  {
    path: '/dashboard/artist',
    title: 'Artist',
    icon: 'person',
    items: [
      {
        path: '/list',
        title: 'List',
        icon: 'list'
      },
      {
        path: '/new',
        title: 'New',
        icon: 'add'
      }
    ]
  },
  {
    path: '/dashboard/exhibition',
    title: 'Exhibition',
    icon: 'cropOriginal',
    items: [
      {
        path: '/list',
        title: 'List',
        icon: 'list'
      },
      {
        path: '/new',
        title: 'New',
        icon: 'add'
      }
    ]
  },
{
  path: '/dashboard/users',
  title: 'Users',
  icon: 'people' 
}
]