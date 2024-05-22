/* eslint-disable */
import {FuseNavigationItem} from '@fuse/components/navigation';
import {roleAdmin, roleTechnician} from '../../../shared/utils/constant';

export const defaultNavigation: FuseNavigationItem[] = [

    {
        id: 'dashboards',
        title: 'Dashboards',
        meta: '',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/dashboards/project',
    },
    {
        id: 'users',
        title: 'Users',
        subtitle: '',
        type: 'group',
        icon: 'heroicons_outline:home',
        meta: 'ROLE_ADMIN',
        children: [
            {
                id: 'users.add',
                title: 'Add user',
                type: 'basic',
                icon: 'heroicons_outline:pencil-alt',
                link: '/pages/add-user',
                meta: 'ROLE_ADMIN',

            },
            {
                id: 'users.show',
                title: 'Show users',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/pages/show-users',
                meta: 'ROLE_ADMIN',
            },
        ]
    },
    {
        id: 'reclamations',
        title: 'Reclamations',
        subtitle: '',
        type: 'group',
        icon: 'heroicons_outline:home',
        meta: 'ROLE_ADMIN',
        children: [
            {
                id: 'reclamations.add',
                title: 'Add reclamation',
                type: 'basic',
                icon: 'heroicons_outline:pencil-alt',
                link: '/pages/add-reclamation',
                meta: 'ROLE_ADMIN',
            },
            {
                id: 'reclamations.show',
                title: 'Show reclamations',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/pages/show-reclamations',
                meta: 'ROLE_ADMIN',
            },
        ]
    },
    {
        id: 'contacts',
        title: 'Contact',
        subtitle: '',
        type: 'group',
        icon: 'heroicons_outline:home',
        meta: roleAdmin,
        children: [
            {
                id: 'contacts.add',
                title: 'Add Contact',
                type: 'basic',
                icon: 'heroicons_outline:pencil-alt',
                link: '/pages/add-contact',
                meta: roleAdmin,
            },
            {
                id: 'contacts.show',
                title: 'Show contacts',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/pages/show-contacts',
                meta: roleAdmin,
            },
        ]
    },
    {
        id: 'equipments',
        title: 'Equipment',
        subtitle: '',
        type: 'group',
        icon: 'heroicons_outline:home',
        meta: roleTechnician,
        children: [
            {
                id: 'equipments.add',
                title: 'Add equipment',
                type: 'basic',
                icon: 'heroicons_outline:pencil-alt',
                link: '/pages/add-equipment',
                meta: roleTechnician,

            },
            {
                id: 'equipments.show',
                title: 'Show equipments',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/pages/show-equipments',
                meta: roleTechnician,

            },
        ]
    },

    {
        id: 'stocks',
        title: 'Stock',
        subtitle: '',
        type: 'group',
        icon: 'heroicons_outline:home',
        meta: roleTechnician,
        children: [
            {
                id: 'stocks.add',
                title: 'Add stock',
                type: 'basic',
                icon: 'heroicons_outline:pencil-alt',
                link: '/pages/add-stock',
                meta: roleTechnician,
            },
            {
                id: 'stocks.show',
                title: 'Show stocks',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/pages/show-stocks',
                meta: roleTechnician,
            },
        ]
    },
    {
        id: 'categories',
        title: 'Category',
        subtitle: '',
        type: 'group',
        icon: 'heroicons_outline:home',
        meta: roleTechnician,
        children: [
            {
                id: 'categories.add',
                title: 'Add category',
                type: 'basic',
                icon: 'heroicons_outline:pencil-alt',
                link: '/pages/add-category',
                meta: roleTechnician,
            },
            {
                id: 'categories.show',
                title: 'Show categories',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/pages/show-categories',
                meta: roleTechnician,
            },
        ]
    },

    // {
    //     id: 'apps',
    //     title: 'Academy',
    //     subtitle: 'Custom made application designs',
    //     type: 'group',
    //     icon: 'heroicons_outline:home',
    //     meta: 'ROLE_ADMIN',
    //     children: [
    //         {
    //             id: 'apps.academy',
    //             title: 'Academy',
    //             type: 'basic',
    //             icon: 'heroicons_outline:academic-cap',
    //             link: '/apps/academy',
    //             meta: 'ROLE_ADMIN',
    //         },
    //     ]
    // },
    // {
    //     id: 'pricing',
    //     title: 'Offers',
    //     subtitle: '',
    //     type: 'group',
    //     icon: 'heroicons_outline:home',
    //     meta: 'ROLE_ADMIN',
    //     children: [
    //         {
    //             id: 'apps.offers',
    //             title: 'Offers',
    //             type: 'basic',
    //             icon: 'heroicons_outline:academic-cap',
    //             link: '/pages/pricing/simple',
    //             meta: 'ROLE_ADMIN',
    //         },
    //     ]
    // },
    {
        id: 'newArrivals',
        title: 'New Arrivals',
        subtitle: '',
        type: 'group',
        icon: 'heroicons_outline:home',
        meta: roleTechnician,
        children: [
            {
                id: 'newArrivals.add',
                title: 'Add new Arrival',
                type: 'basic',
                icon: 'heroicons_outline:pencil-alt',
                link: '/pages/add-new-arrival',
                meta: roleTechnician,
            },
            {
                id: 'newArrivals.show',
                title: 'Show new Arrivals',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/pages/show-new-arrivals',
                meta: roleTechnician,
            },
        ]
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        tooltip: 'Dashboards',
        type: 'basic',
        icon: 'heroicons_outline:home',
        meta: 'ROLE_ADMIN',
        link: '/dashboards/project',
    },
    {
        id: 'resources',
        title: 'Resources',
        subtitle: '',
        type: 'group',
        meta: 'ROLE_ADMIN',
        icon: 'heroicons_outline:home',
        children: [

            {
                id: 'resources.show',
                title: 'Show resources',
                type: 'basic',
                meta: '',
                icon: 'heroicons_outline:chart-pie',
                link: '/apps/file-manager'
            },
        ]
    }

];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'DASHBOARDS',
        type: 'group',
        meta: 'ROLE_ADMIN',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'resources',
        title: 'Resources',
        meta: 'ROLE_ADMIN',
        subtitle: '',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [

            {
                id: 'resources.show',
                title: 'Show resources',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/apps/file-manager',
                meta: ''
            },
        ]
    }

];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        meta: 'ROLE_ADMIN',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/dashboards/project',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },

    {
        id: 'apps',
        title: 'Academy',
        subtitle: '',
        type: 'basic',
        icon: 'heroicons_outline:home',
        meta: 'ROLE_ADMIN',
        link: '/apps/academy',
    },
    {
        id: 'resources',
        title: 'Resources',
        subtitle: '',
        type: 'basic',
        meta: 'ROLE_ADMIN',
        icon: 'heroicons_outline:folder',
        link: '/apps/file-manager'
    },
    {
        id: 'pricing',
        title: 'Offers',
        subtitle: '',
        type: 'basic',
        icon: 'heroicons_outline:shopping-bag',
        meta: 'ROLE_ADMIN',
        link: '/pages/pricing/simple',
    }
];
