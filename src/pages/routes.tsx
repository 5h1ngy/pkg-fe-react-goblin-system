import { RouteObject, Outlet, Navigate } from "react-router-dom"
import { HiBookmark, HiHome } from "react-icons/hi2";

import { withDynamicLayouts } from "@/hocs/withDynamicImport";
import ErrorLayout from "@/layouts/error/ErrorLayout"
import LoadingLayout from "@/layouts/loading/LoadingLayout"
import { ComponentProps } from "@/layouts/transformer/TransformerLayout";

import * as aboutPageRoute from "@/pages/about/aboutPage.route";
import * as loginPageRoute from "@/pages/login/loginPage.route";
import * as registerPageRoute from "@/pages/register/registerPage.route";
import * as profileOverviewPageRoute from "@/pages/profileOverview/profileOverviewPage.route";
import * as profileSettingsPageRoute from "@/pages/profileSettings/profileSettingsPage.route";
import * as userOverviewPageRoute from "@/pages/usersOverview/usersOverviewPage.route";

export const routes: RouteObject[] = [
    {
        id: "root",
        path: "/",
        errorElement: <ErrorLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/auth/login" replace />
            },
            {
                id: "ROOT_CHILD",
                path: '',
                errorElement: <LoadingLayout />,
                element: withDynamicLayouts<ComponentProps>(
                    {
                        layoutName: 'Transformer', loader: <LoadingLayout />
                    },
                    {
                        children: <Outlet />,
                        logo: `${import.meta.env.VITE_BASENAME}/assets/logo.png`,
                        background: {
                            opacity: 60,
                            image: 'background_white.png',
                            imageDark: 'background_dark.png'
                        },
                        navigationScroll: false,
                        navbarItems: [
                            { icon: <HiHome />, label: "About", value: '/about' },
                            { icon: <HiHome />, label: "Profile", value: '/dashboard/profile/overview', group: "PROFILE" },
                            { icon: <HiHome />, label: "Users", value: '/dashboard/users/overview', group: "USERS" },
                        ]
                    }
                ),
                children: [
                    {
                        id: "ROOT_CHILD_ABOUT",
                        path: 'about',
                        ...aboutPageRoute,
                    }
                ]
            },
            {
                id: "AUTH",
                path: 'auth',
                errorElement: <ErrorLayout />,
                element: withDynamicLayouts(
                    {
                        layoutName: 'Transformer', loader: <LoadingLayout />
                    },
                    {
                        children: <Outlet />,
                        background: {
                            opacity: 60,
                            image: 'background_white.png',
                            imageDark: 'background_dark.png'
                        },
                    }
                ),
                children: [
                    {
                        id: "AUTH_REGISTER",
                        path: 'register',
                        ...registerPageRoute,
                    },
                    {
                        id: "AUTH_LOGIN",
                        path: 'login',
                        ...loginPageRoute,
                    }
                ]
            },
            {
                id: "DASHBOARD",
                path: 'dashboard',
                errorElement: <ErrorLayout />,
                element: withDynamicLayouts<ComponentProps>(
                    {
                        layoutName: 'Transformer', loader: <LoadingLayout />
                    },
                    {
                        children: <Outlet />,
                        logo: `${import.meta.env.VITE_BASENAME}/assets/logo.png`,
                        background: {
                            opacity: 60,
                            image: 'background_white.png',
                            imageDark: 'background_dark.png'
                        },
                        navigationScroll: false,
                        navbarItems: [
                            { icon: <HiHome />, label: "About", value: '/about' },
                            { icon: <HiHome />, label: "Profile", value: '/dashboard/profile', group: "PROFILE" },
                            { icon: <HiHome />, label: "Users", value: '/dashboard/users', group: "USERS" },
                        ],
                        navbarSubItems: [
                            { icon: <HiHome />, label: 'Overview', value: '/dashboard/profile/overview', group: ["PROFILE"] },
                            { icon: <HiHome />, label: 'Settings', value: '/dashboard/profile/settings', group: ["PROFILE"] },
                            { icon: <HiBookmark />, label: 'Overview', value: '/dashboard/users/overview', group: ["USERS"] },
                            { icon: <HiBookmark />, label: 'Settings', value: '/dashboard/users/settings', group: ["USERS"] }
                        ]
                    }
                ),
                children: [
                    {
                        id: "DASHBOARD_PROFILE_INDEX",
                        path: 'profile',
                        element: <Navigate to="/dashboard/profile/overview" />
                    },
                    {
                        id: "DASHBOARD_PROFILE_OVERVIEW",
                        path: 'profile/overview',
                        ...profileOverviewPageRoute,
                    },
                    {
                        id: "DASHBOARD_PROFILE_SETTINGS",
                        path: 'profile/settings',
                        ...profileSettingsPageRoute,
                    },
                    {
                        id: "DASHBOARD_USERS_INDEX",
                        path: 'users',
                        element: <Navigate to="/dashboard/users/overview" />
                    },
                    {
                        id: "DASHBOARD_USERS_OVERVIEW",
                        path: 'users/overview',
                        ...userOverviewPageRoute,
                    },
                    {
                        id: "DASHBOARD_USERS_SETTINGS",
                        path: 'users/settings',
                        element: <></>
                    }
                ]
            },
        ]
    }
];