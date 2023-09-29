import { Menu } from '@/components/types/Menu';

const menuData = {
  'en-us': [
    {
      id: 1,
      title: 'Home',
      path: '/en-us',
      newTab: false,
    },
    {
      id: 2,
      title: 'About',
      path: '/en-us/about',
      newTab: false,
    },
    {
      id: 3,
      title: 'Blog',
      path: '/en-us/blog',
      newTab: false,
    },
    {
      id: 4,
      title: 'Awards',
      path: '/en-us/award',
      newTab: false,
    },
    {
      id: 5,
      title: 'Teams',
      newTab: false,
      submenu: [
        {
          id: 41,
          title: 'SSL',
          path: '/en-us/teams/about',
          newTab: false,
        },
        {
          id: 42,
          title: 'VSS',
          path: '/en-us/teams/vss',
          newTab: false,
        },
        {
          id: 43,
          title: 'UAV',
          path: '/en-us/teams/blog',
          newTab: false,
        },
        {
          id: 44,
          title: 'Autonomous Cars',
          path: '/en-us/teams/auc',
          newTab: false,
        },
      ],
    },
    {
      id: 6,
      title: 'URUCUP',
      newTab: false,
      submenu: [
        {
          id: 51,
          title: '2022',
          path: '/en-us/urucup/2022',
          newTab: false,
        },
      ],
    },
    {
      id: 7,
      title: 'Contact',
      path: '/en-us/contact',
      newTab: false,
    },
  ],
  'es-ar': [
    {
      id: 1,
      title: 'Inicio',
      path: '/',
      newTab: false,
    },
    {
      id: 2,
      title: 'Sobre nosotros',
      path: '/about',
      newTab: false,
    },
    {
      id: 3,
      title: 'Blog',
      path: '/blog',
      newTab: false,
    },
    {
      id: 4,
      title: 'Premios',
      path: '/award',
      newTab: false,
    },
    {
      id: 5,
      title: 'Equipos',
      newTab: false,
      submenu: [
        {
          id: 41,
          title: 'SSL',
          path: '/teams/ssl',
          newTab: false,
        },
        {
          id: 42,
          title: 'VSS',
          path: '/teams/vss',
          newTab: false,
        },
        {
          id: 43,
          title: 'UAV',
          path: '/teams/uav',
          newTab: false,
        },
        {
          id: 44,
          title: 'Autos autonomos',
          path: '/teams/auc',
          newTab: false,
        },
      ],
    },
    {
      id: 6,
      title: 'URUCUP',
      newTab: false,
      submenu: [
        {
          id: 51,
          title: '2022',
          path: '/urucup/2022',
          newTab: false,
        },
      ],
    },
    {
      id: 7,
      title: 'Contacto',
      path: '/contact',
      newTab: false,
    },
  ],
  'pt-br': [
    {
      id: 1,
      title: 'Inicio',
      path: '/pt-br',
      newTab: false,
    },
    {
      id: 2,
      title: 'Sobre nós',
      path: '/pt-br/about',
      newTab: false,
    },
    {
      id: 3,
      title: 'Blogue',
      path: '/pt-br/blog',
      newTab: false,
    },
    {
      id: 4,
      title: 'Prêmios',
      path: '/pt-br/award',
      newTab: false,
    },
    {
      id: 5,
      title: 'Equipes',
      newTab: false,
      submenu: [
        {
          id: 41,
          title: 'SSL',
          path: '/pt-br/teams/ssl',
          newTab: false,
        },
        {
          id: 42,
          title: 'VSS',
          path: '/pt-br/teams/vss',
          newTab: false,
        },
        {
          id: 43,
          title: 'UAV',
          path: '/pt-br/teams/uav',
          newTab: false,
        },
        {
          id: 44,
          title: 'Carros autônomos',
          path: '/pt-br/teams/auc',
          newTab: false,
        },
      ],
    },
    {
      id: 6,
      title: 'URUCUP',
      newTab: false,
      submenu: [
        {
          id: 51,
          title: '2022',
          path: '/pt-br/urucup/2022',
          newTab: false,
        },
      ],
    },
    {
      id: 7,
      title: 'Contato',
      path: '/pt-br/contact',
      newTab: false,
    },
  ],
};

export const getMenuItems = (lang: string) => {
  // @ts-ignore
  return menuData[lang];
};

export default menuData;
