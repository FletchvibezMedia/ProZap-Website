import type {MetadataRoute} from "next";

export default function manifest():MetadataRoute.Manifest{return {
 name:"ProZap Mobile EV Charging",
 short_name:"ProZap",
 description:"On-demand mobile EV charging and roadside battery assistance across Central Florida.",
 start_url:"/",
 display:"standalone",
 background_color:"#070b0d",
 theme_color:"#b8f126",
 icons:[{src:"/favicon.svg",sizes:"any",type:"image/svg+xml"}]
}}
