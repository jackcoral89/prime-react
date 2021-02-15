import { Menubar } from 'primereact/menubar';

import './Menu.scss';

import logo from '../../assets/img/logo.png';

export default function Menu() {

  const items = [
    {
      label: 'File',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {
              label: 'Bookmark',
              icon: 'pi pi-fw pi-bookmark'
            },
            {
              label: 'Video',
              icon: 'pi pi-fw pi-video'
            },

          ]
        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-trash'
        },
        {
          separator: true
        },
        {
          label: 'Export',
          icon: 'pi pi-fw pi-external-link'
        }
      ]
    },
    {
      label: 'Quit',
      icon: 'pi pi-fw pi-power-off',
      command: () => {
        console.log('link');
      }
    }
  ];

  const start = <a href="/"><img alt="logo" src={logo} height="40" className="p-mr-2" /></a>;

  return (
    <div className="menu">
      <Menubar
        model={items}
        start={start}
      // end={end}
      />
    </div>
  );
}