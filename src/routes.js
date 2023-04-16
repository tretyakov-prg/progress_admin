import React from 'react'

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Tables = React.lazy(() => import('./pages/Tables'));
const Tasks = React.lazy(() => import('./pages/Tasks'));
const Order = React.lazy(() => import('./pages/Order'))

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', element: Dashboard },
    { path: '/tables', name: 'Tables', element: Tables },
    { path: '/tasks', name: 'Tasks', element: Tasks },
    { path: '/tasks/:id', name: 'Order', element: Order}
]

export default routes;