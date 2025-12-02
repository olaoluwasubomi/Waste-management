"use client";
import { usePathname } from "next/navigation";

export default function OnboardingLayout({children} : {children: React.ReactNode}) {
    const pathname = usePathname();
    const py = pathname.includes("login") ? "py-16 md:py-20 lg:py-22 xl:py-22" : pathname.includes("signup") ? "xl:py-7 lg:py-7 md:py-6 py-10" : "py-10";
    return (
        <div className={`w-full h-screen ${py}  bg-gradient-to-br from-emerald-50 via-teal-100 to-green-50 md:bg-gradient-to-br from-emerald-50 via-teal-100 to-green-50 lg:bg-gradient-to-br from-emerald-50 via-teal-100 to-green-50 xl:bg-gradient-to-br from-emerald-50 via-teal-100 to-green-50`}>
            <div className="xl:w-1/4 lg:w-1/4 md:w-1/2 w-full bg-transparent rounded-xl py-0 px-0 z-10 relative mx-auto">
                {children}
            </div>
        </div>
    )
}