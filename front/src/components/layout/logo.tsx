import { Geo } from "next/font/google"
import { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const geo = Geo({
    variable: '--font-geo',
    subsets: ['latin'],
    weight: ['400'],
})

export default function Logo({
    className,
    ...props
}: HTMLAttributes<HTMLAnchorElement>) {
    return <Link
        href="/"
        className={cn(`text-4xl uppercase ${geo.className}`, className)}
        {...props}
    >
        robots
    </Link>
}