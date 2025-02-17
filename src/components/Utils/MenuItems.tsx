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
        title: 'Team',
        path: '/en-us/team',
        newTab: false,
    },
    {
      id: 6,
      title: 'Competitions',
      newTab: false,
      submenu: [
        {
          id: 41,
          title: 'SSL',
          path: '/en-us/competition/ssl',
          newTab: false,
        },
        {
          id: 42,
          title: 'VSS',
          path: '/en-us/competition/vss',
          newTab: false,
        },
        {
          id: 43,
          title: 'UAV',
          path: '/en-us/competition/uav',
          newTab: false,
        },
        {
          id: 44,
          title: 'Autonomous Cars',
          path: '/en-us/competition/auc',
          newTab: false,
        },
      ],
    },
    {
      id: 7,
      title: 'URUCUP',
      path: '/en-us/urucup',
      newTab: false,
    },
    {
      id: 8,
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
        title: 'Equipo',
        path: '/team',
        newTab: false,
    },
    {
      id: 6,
      title: 'Competencias',
      newTab: false,
      submenu: [
        {
          id: 41,
          title: 'SSL',
          path: '/competition/ssl',
          newTab: false,
        },
        {
          id: 42,
          title: 'VSS',
          path: '/competition/vss',
          newTab: false,
        },
        {
          id: 43,
          title: 'UAV',
          path: '/competition/uav',
          newTab: false,
        },
        {
          id: 44,
          title: 'Autos autonomos',
          path: '/competition/auc',
          newTab: false,
        },
      ],
    },
    {
      id: 7,
      title: 'URUCUP',
      newTab: false,
      path: '/competition/urucup',
    },
    {
      id: 8,
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
        title: 'Equipe',
        path: '/pt-br/team',
        newTab: false,
    },
    {
      id: 6,
      title: 'Competições',
      newTab: false,
      submenu: [
        {
          id: 41,
          title: 'SSL',
          path: '/pt-br/competition/ssl',
          newTab: false,
        },
        {
          id: 42,
          title: 'VSS',
          path: '/pt-br/competition/vss',
          newTab: false,
        },
        {
          id: 43,
          title: 'UAV',
          path: '/pt-br/competition/uav',
          newTab: false,
        },
        {
          id: 44,
          title: 'Carros autônomos',
          path: '/pt-br/competition/auc',
          newTab: false,
        },
      ],
    },
    {
      id: 7,
      title: 'URUCUP',
      path: '/pt-br/urucup',
      newTab: false,
    },
    {
      id: 8,
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
