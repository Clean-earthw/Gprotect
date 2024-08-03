import React from "react";
import AppIcon from "./LogoIcon";
import { defaultColor } from "@/constants/constants";
import App from "next/app";

export function BrandLogo(){
    return (
        <div className="flex gap-2 items-center sm:justify-start justify-center">
            <span className="text-2xl font-light flex items-center gap-2">
                <div style={{backgroundColor:defaultColor}} className="p-2 rounded-md">
                    <AppIcon color="#ffffff" height="34" width="34"/>
                </div> 
                <span style={{ color:'#d90429'}} className="font-bold text-mainColor">
                    G
                </span>
                <span className="font-light font-bold">Protect</span>
            </span>
        </div>
    )
}