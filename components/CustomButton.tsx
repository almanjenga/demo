"use client";

import Image from "next/image"
import { CustomButtonProps } from "../types";


const CustomButton = ({title, containerStyles, handleClick, btnType}: CustomButtonProps) => {
    return (
    <button
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn flex flex-row relative justify-center items-center py-1 px-6 outline-none ${containerStyles}`}
    onClick={handleClick}
>
    <span className="flex-1">
    {title}
    </span>
</button>

    )
}

export default CustomButton