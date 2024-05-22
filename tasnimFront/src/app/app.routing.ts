import {Route} from '@angular/router';
import {AuthGuard} from 'app/core/auth/guards/auth.guard';
import {LayoutComponent} from 'app/layout/layout.component';
import {InitialDataResolver} from 'app/app.resolvers';
import {roleAdmin, roleTechnician, roleUser} from './shared/utils/constant';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/dashboards/project'
    {path: '', pathMatch: 'full', redirectTo: '/dashboards/project'},

    // Redirect signed-in user to the '/apps/academy'
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'apps/academy'},

    // Auth routes for guests
    {
        path: '',
        // canActivate: [NoAuthGuard],
        // canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {
                path: 'confirmation-required',
                loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)
            },
            {
                path: 'forgot-password',
                loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)
            },
            {
                path: 'reset-password',
                loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)
            },
            {
                path: 'sign-in',
                loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)
            },
            {
                path: 'sign-up',
                loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)
            },
            {
                path: 'apps',
                data: {
                    role: [roleAdmin, roleUser]
                },
                resolve: {
                    initialData: InitialDataResolver,
                },
                children: [
                    {
                        path: 'ecommerce',
                        loadChildren: () => import('app/modules/admin/apps/ecommerce/ecommerce.module').then(m => m.ECommerceModule)
                    },

                ]
            }
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {
                path: 'sign-out',
                loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)
            },
            {
                path: 'unlock-session',
                loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)
            }
        ]
    },

    // Landing routes
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {
                path: 'home',
                loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)
            },
        ]
    },

    // Admin routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [

            // Dashboards
            {
                path: 'dashboards', children: [
                    {
                        path: 'project',
                        data: {
                            role: roleAdmin
                        },
                        loadChildren: () => import('app/modules/admin/dashboards/project/project.module').then(m => m.ProjectModule)
                    },
                    {
                        path: 'analytics',
                        loadChildren: () => import('app/modules/admin/dashboards/analytics/analytics.module').then(m => m.AnalyticsModule)
                    },
                    {
                        path: 'finance',
                        loadChildren: () => import('app/modules/admin/dashboards/finance/finance.module').then(m => m.FinanceModule)
                    },
                    {
                        path: 'crypto',
                        loadChildren: () => import('app/modules/admin/dashboards/crypto/crypto.module').then(m => m.CryptoModule)
                    },
                ]
            },
            // Pages
            {
                path: 'pages',
                canActivate: [AuthGuard],
                canActivateChild: [AuthGuard],
                data: {
                    role: roleAdmin
                },
                children: [

                    // Activities
                    {
                        path: 'activities',
                        loadChildren: () => import('app/modules/admin/pages/activities/activities.module').then(m => m.ActivitiesModule)
                    },
                    {
                        path: 'add-reclamation',
                        loadChildren: () => import('app/modules/admin/pages/reclamation/add-reclamation/add-reclamation.module').then(m => m.AddReclamationModule)
                    },
                    {
                        path: 'show-reclamations',
                        data: {
                            role: roleAdmin
                        },
                        loadChildren: () => import('app/modules/admin/pages/reclamation/show-reclamations/show-reclamations.module').then(m => m.ShowReclamationsModule)
                    },
                    {
                        path: 'add-stock',
                        data: {
                            role: roleAdmin
                        },
                        loadChildren: () => import('app/modules/admin/pages/stock/add-stock/add-stock.module').then(m => m.AddStockModule)
                    },
                    {
                        path: 'add-stock/:idStock',
                        data: {
                            role: roleAdmin
                        },
                        loadChildren: () => import('app/modules/admin/pages/stock/add-stock/add-stock.module').then(m => m.AddStockModule)
                    },
                    {
                        path: 'show-stocks',
                        data: {
                            role: roleAdmin
                        },
                        loadChildren: () => import('app/modules/admin/pages/stock/show-stocks/show-stocks.module').then(m => m.ShowStocksModule)
                    },

                    {
                        path: 'show-categories',
                        data: {
                            role: roleAdmin
                        },
                        loadChildren: () => import('app/modules/admin/pages/categories/show-categories/show-categories.module').then(m => m.ShowCategoriesModule)
                    },
                    {
                        path: 'add-category',
                        data: {
                            role: roleAdmin
                        },
                        loadChildren: () => import('app/modules/admin/pages/categories/add-category/add-category.module').then(m => m.AddCategoryModule)
                    },
                    {
                        path: 'add-category/:idCategory',
                        data: {
                            role: roleAdmin
                        },
                        loadChildren: () => import('app/modules/admin/pages/categories/add-category/add-category.module').then(m => m.AddCategoryModule)
                    },
                    {
                        path: 'show-contacts',
                        data: {
                            role: roleAdmin
                        },
                        loadChildren: () => import('app/modules/admin/pages/contact/show-contacts/show-contacts.module').then(m => m.ShowContactsModule)
                    },
                    {
                        path: 'add-contact',
                        data: {
                            role: roleAdmin
                        },
                        loadChildren: () => import('app/modules/admin/pages/contact/add-contact/add-contact.module').then(m => m.AddContactModule)
                    },
                    {
                        path: 'add-contact/:idContact',
                        data: {
                            role: roleAdmin
                        },
                        loadChildren: () => import('app/modules/admin/pages/contact/add-contact/add-contact.module').then(m => m.AddContactModule)
                    },
                    {
                        path: 'show-equipments',
                        data: {
                            role: roleTechnician
                        },
                        loadChildren: () => import('app/modules/admin/pages/equipments/show-equipments/show-equipments.module').then(m => m.ShowEquipmentsModule)
                    },
                    {
                        path: 'add-equipment',
                        data: {
                            role: roleTechnician
                        },
                        loadChildren: () => import('app/modules/admin/pages/equipments/add-equipment/add-equipment.module').then(m => m.AddEquipmentModule)
                    },
                    {
                        path: 'add-equipment/:idEquipment',
                        data: {
                            role: roleTechnician
                        },
                        loadChildren: () => import('app/modules/admin/pages/equipments/add-equipment/add-equipment.module').then(m => m.AddEquipmentModule)
                    },
                    {
                        path: 'add-user',
                        data: {
                            role: roleAdmin
                        },
                        loadChildren: () => import('app/modules/admin/pages/user/add-user/add-user.module').then(m => m.AddUserModule)
                    },
                    {
                        path: 'show-users',
                        data: {
                            role: roleAdmin
                        },
                        loadChildren: () => import('app/modules/admin/pages/user/show-users/show-users.module').then(m => m.ShowUsersModule)
                    },
                    // Error
                    {
                        path: 'error', children: [
                            {
                                path: '404',
                                loadChildren: () => import('app/modules/admin/pages/error/error-404/error-404.module').then(m => m.Error404Module)
                            },
                            {
                                path: '500',
                                loadChildren: () => import('app/modules/admin/pages/error/error-500/error-500.module').then(m => m.Error500Module)
                            }
                        ]
                    },
                    // Pricing
                    {
                        path: 'pricing',
                        data: {
                            role: roleUser,
                            layout: 'modern'

                        },
                        children: [

                            {
                                path: 'simple',
                                data: {
                                    role: roleUser
                                },
                                loadChildren: () => import('app/modules/admin/pages/pricing/simple/simple.module').then(m => m.PricingSimpleModule)
                            },

                        ]
                    },

                    // Profile
                    {
                        path: 'profile',
                        loadChildren: () => import('app/modules/admin/pages/profile/profile.module').then(m => m.ProfileModule)
                    },

                    // Settings
                    {
                        path: 'settings',
                        loadChildren: () => import('app/modules/admin/pages/settings/settings.module').then(m => m.SettingsModule)
                    },
                ]
            },

            // User Interface
            {
                path: 'ui', children: [

                    // Material Components
                    {
                        path: 'material-components',
                        loadChildren: () => import('app/modules/admin/ui/material-components/material-components.module').then(m => m.MaterialComponentsModule)
                    },

                    // Fuse Components
                    {
                        path: 'fuse-components',
                        loadChildren: () => import('app/modules/admin/ui/fuse-components/fuse-components.module').then(m => m.FuseComponentsModule)
                    },

                    // Other Components
                    {
                        path: 'other-components',
                        loadChildren: () => import('app/modules/admin/ui/other-components/other-components.module').then(m => m.OtherComponentsModule)
                    },


                    // Advanced Search
                    {
                        path: 'advanced-search',
                        loadChildren: () => import('app/modules/admin/ui/advanced-search/advanced-search.module').then(m => m.AdvancedSearchModule)
                    },

                    // Cards
                    {
                        path: 'cards',
                        loadChildren: () => import('app/modules/admin/ui/cards/cards.module').then(m => m.CardsModule)
                    },

                    // Colors
                    {
                        path: 'colors',
                        loadChildren: () => import('app/modules/admin/ui/colors/colors.module').then(m => m.ColorsModule)
                    },

                    // Confirmation Dialog
                    {
                        path: 'confirmation-dialog',
                        loadChildren: () => import('app/modules/admin/ui/confirmation-dialog/confirmation-dialog.module').then(m => m.ConfirmationDialogModule)
                    },


                    // Forms
                    {
                        path: 'forms', children: [
                            {
                                path: 'fields',
                                loadChildren: () => import('app/modules/admin/ui/forms/fields/fields.module').then(m => m.FormsFieldsModule)
                            },
                            {
                                path: 'layouts',
                                loadChildren: () => import('app/modules/admin/ui/forms/layouts/layouts.module').then(m => m.FormsLayoutsModule)
                            },
                            {
                                path: 'wizards',
                                loadChildren: () => import('app/modules/admin/ui/forms/wizards/wizards.module').then(m => m.FormsWizardsModule)
                            }
                        ]
                    },

                    // Icons
                    {
                        path: 'icons',
                        loadChildren: () => import('app/modules/admin/ui/icons/icons.module').then(m => m.IconsModule)
                    },

                    // Page Layouts
                    {
                        path: 'page-layouts',
                        loadChildren: () => import('app/modules/admin/ui/page-layouts/page-layouts.module').then(m => m.PageLayoutsModule)
                    },

                ]
            },

            // Documentation
            {
                path: 'docs', children: [

                    // Changelog
                    {
                        path: 'changelog',
                        loadChildren: () => import('app/modules/admin/docs/changelog/changelog.module').then(m => m.ChangelogModule)
                    },

                    // Guides
                    {
                        path: 'guides',
                        loadChildren: () => import('app/modules/admin/docs/guides/guides.module').then(m => m.GuidesModule)
                    }
                ]
            },

            // 404 & Catch all
            // {
            //     path: '404-not-found',
            //     pathMatch: 'full',
            //     loadChildren: () => import('app/modules/admin/pages/error/error-404/error-404.module').then(m => m.Error404Module)
            // },
            {path: '**', redirectTo: '/dashboards/project'}
        ]
    }
];
