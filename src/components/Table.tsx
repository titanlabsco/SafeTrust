'use client'

import {
    Card,
    Typography,
    CardBody,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react"
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline"
import { DataTableProps } from "@/types/table";




const TABLE_HEAD = ["ID No.", "Name", "Phone", "Wallet", "Offer date", "Status", "Actions"];

export function Table({ data, onActionClick }: DataTableProps) {
    return (
        <Card className="w-full bg-transparent shadow-none" {...({} as any)}>
            <CardBody className="overflow-x-auto px-0" {...({} as any)}>
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                                <th
                                    key={head}
                                    className={`${index === 0 ? 'rounded-l-xl' : index === TABLE_HEAD.length - 1 && 'rounded-r-xl'} 
                                             border-blue-gray-100 bg-blue-gray-50 p-4`}
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-bold text-black leading-none opacity-70"
                                        {...({} as any)}
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan={TABLE_HEAD.length} className="p-4 text-center text-gray-500">
                                    No data found
                                </td>
                            </tr>
                        ) : (
                            data.map((item, index) => {
                                const isLast = index === data.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-blue-gray-50";

                                return (
                                    <tr key={item.id}>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal" {...({} as any)}>
                                                {item.id}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal" {...({} as any)}>
                                                {item.name}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal text-gray-500" {...({} as any)}>
                                                {item.phone}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal text-gray-500" {...({} as any)}>
                                                {item.wallet.slice(0, 3) + "..." + item.wallet.slice(-3)}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal text-gray-500" {...({} as any)}>
                                                {item.offerDate}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                <Typography
                                                    variant="small"
                                                    className={`font-medium ${
                                                        item.status === "pending"
                                                            ? "text-red-600 bg-red-200"
                                                            : "text-light-blue-600 bg-light-blue-200"
                                                    } px-2 py-1 rounded-full`}
                                                    {...({} as any)}
                                                >
                                                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Menu placement="left-start">
                                                <MenuHandler>
                                                    <IconButton variant="text" color="blue-gray" {...({} as any)}>
                                                        <EllipsisHorizontalIcon fontSize={50} className="h-10 w-10 text-orange-500" />
                                                    </IconButton>
                                                </MenuHandler>
                                                <MenuList {...({} as any)}>
                                                    <MenuItem onClick={() => onActionClick?.("view", item)} {...({} as any)}>
                                                        View Details
                                                    </MenuItem>
                                                    <MenuItem onClick={() => onActionClick?.("edit", item)} {...({} as any)}>
                                                        Edit
                                                    </MenuItem>
                                                    <MenuItem onClick={() => onActionClick?.("delete", item)} {...({} as any)}>
                                                        Delete
                                                    </MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </td>
                                    </tr>
                                )
                            })
                        )}
                    </tbody>
                </table>
            </CardBody>
        </Card>
    )
}