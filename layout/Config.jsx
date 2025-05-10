import { SvgIcon } from '@mui/material';
import {HomeIcon, BuildingLibraryIcon, EnvelopeIcon} from '@heroicons/react/24/outline'

export let navItems = [
    {
      title: 'Inicio',
      path: '/',
      icon: (
        <SvgIcon fontSize="small" sx={{mr:1}}>
          {/* <ChartBarIcon/> */}
          <HomeIcon/>
        </SvgIcon>
      ),
      dropdown: [],
      role: []
    },
    {
      title: 'Municipio',
      path: '/municipio',
      icon: (
        <SvgIcon fontSize='small' sx={{mr:1}}>
          {/* <FolderPlusIcon/> */}
          <BuildingLibraryIcon />
        </SvgIcon>
      ),
      dropdown: [],
      role: []
    },
    {
      title: 'Contacto',
      path: '/contacto',
      icon: (
        <SvgIcon fontSize="small" sx={{mr:1}}>
          {/* <ListBulletIcon /> */}
          <EnvelopeIcon />
        </SvgIcon>
      ),
      dropdown: [],
      role: ['admin', 'user']
    }
  ];