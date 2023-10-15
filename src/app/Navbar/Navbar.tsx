import Link from "next/link"
import Image from "next/image"
export default function Navbar() {
    return (
        <div className = "bg-base-100">
            <div className = "navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
                <div className = "flex-1">
                    <Link href="/" className = "btn btn-ghost text-xl normal-case">
                        <Image src = "/logo.png" height = {40} width = {40} alt="Konespo logo" />
                        Konespo
                    </Link>
                </div>
            </div>
        </div>
    )
}