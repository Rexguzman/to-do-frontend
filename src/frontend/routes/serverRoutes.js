import { Economy, Home, Login, Register, Profile, Error404 } from '../pages';

const routes = [
    {
      exact: true,
      path: '/',
      component: Home,
    },
    {
      exact: true,
      path: '/login',
      component: Login,
    },
    {
      exact: true,
      path: '/register',
      component: Register,
    },
    {
      exact: true,
      path: '/Profile',
      component: Profile,
    },
    {
      exact: true,
      path: '/Economy',
      component: Economy,
    },
    {
      name: 'Error404',
      component: Error404,
    },
  ];
  
  export default routes;