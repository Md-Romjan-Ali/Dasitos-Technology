"use client";

import { useTheme } from "next-themes";
import { IoIosSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";

export function ThemeSwitch() {
    const { theme, setTheme } = useTheme();

    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <IoIosSunny size={30} /> : <MdDarkMode size={30} />}
        </button>
    );
}