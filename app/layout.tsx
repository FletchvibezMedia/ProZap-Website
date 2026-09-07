import type {Metadata} from "next";
import "./globals.css";
import "./overrides.css";

const siteUrl="https://prozapev.com";

export const metadata:Metadata={
 metadataBase:new URL(siteUrl),
 title:{default:"ProZap | Mobile EV Charging in Central Florida",template:"%s | ProZap"},
 description:"Stranded with a low or dead EV battery? ProZap brings fast mobile electric vehicle charging to you across Central Florida. Call 407-686-2539.",
 keywords:["mobile EV charging","emergency EV charging","roadside EV charging","Tesla roadside charging","electric car charging service","Central Florida EV charging","Orlando mobile EV charger"],
 alternates:{canonical:"/"},
 openGraph:{type:"website",locale:"en_US",siteName:"ProZap Mobile EV Charging",title:"ProZap Mobile EV Charging",description:"On-demand roadside EV charging across Central Florida.",url:siteUrl},
 icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}
};

const schema={
 "@context":"https://schema.org",
 "@type":"AutomotiveBusiness",
 name:"ProZap Mobile EV Charging",
 url:siteUrl,
 telephone:"+1-407-686-2539",
 email:"Prozap2025@gmail.com",
 description:"On-demand mobile EV charging and roadside battery assistance serving Central Florida.",
 address:{"@type":"PostalAddress",streetAddress:"4378 L B McLeod Road",addressLocality:"Orlando",addressRegion:"FL",postalCode:"32811",addressCountry:"US"},
 hasMap:"https://www.google.com/maps/search/?api=1&query=4378+L+B+McLeod+Rd%2C+Orlando%2C+FL+32811",
 areaServed:{"@type":"AdministrativeArea",name:"Central Florida"},
 priceRange:"$$",
 sameAs:["https://www.instagram.com/prozap25/","https://www.tiktok.com/@prozap42","https://www.facebook.com/prozap25"]
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>}
