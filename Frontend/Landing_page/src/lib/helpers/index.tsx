import React from 'react'

type OrderStatus = 'ACTIVE' | 'INACTIVE' | string

export function getOrderStatus(status: OrderStatus): JSX.Element {
    const formattedStatus = status.replaceAll('_', ' ').toLowerCase()

    switch (status) {
        case 'ACTIVE':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-green-500 bg-green-100">
                    {formattedStatus}
                </span>
            )
        case 'INACTIVE':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-red-500 bg-red-100">
                    {formattedStatus}
                </span>
            )
        default:
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100">
                    {formattedStatus}
                </span>
            )
    }
}
