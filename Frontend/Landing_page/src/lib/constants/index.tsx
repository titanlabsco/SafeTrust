import React from 'react'
import {
    HiOutlineViewGrid,
    HiDocument,
    HiOutlineUsers,
    HiOutlineDocumentText,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog
} from 'react-icons/hi'

interface SidebarLink {
    key: string
    label: string
    path: string
    icon: JSX.Element
}

export const DASHBOARD_SIDEBAR_LINKS: SidebarLink[] = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/dashboard',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'tenders',
        label: 'Tenders',
        path: '/dashboard/tenders',
        icon: <HiDocument />
    },
    {
        key: 'contracts',
        label: 'Contracts',
        path: '/dashboard/contracts',
        icon: <HiOutlineDocumentText />
    },
    {
        key: 'suppliers',
        label: 'Suppliers',
        path: '/dashboard/suppliers',
        icon: <HiOutlineUsers />
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS: SidebarLink[] = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <HiOutlineCog />
    },
    {
        key: 'support',
        label: 'Help & Support',
        path: '/support',
        icon: <HiOutlineQuestionMarkCircle />
    }
]
