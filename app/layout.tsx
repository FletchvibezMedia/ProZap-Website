import type {Metadata} from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/barlow-condensed/800.css";
import "@fontsource/barlow-condensed/900.css";
import "./globals.css";
import "./overrides.css";
import "./midnight-current.css";

const siteUrl="https://prozapev.com";

export const metadata:Metadata={
 metadataBase:new URL(siteUrl),
 title:{default:"24/7 Emergency EV Charging Orlando | ProZap",template:"%s | ProZap"},
 description:"Need emergency EV charging in Orlando? Call ProZap’s 24/7 dispatch line for mobile DC fast charging and compatible 12-volt roadside assistance. Technician availability, access, compatibility, ETA and pricing are confirmed for each request.",
 applicationName:"ProZap Mobile EV Charging",
 category:"automotive",
 keywords:["emergency EV charging Orlando","emergency EV charging near me","mobile EV charging Orlando","roadside EV charging","Tesla roadside charging Orlando","dead electric car battery help","electric car roadside assistance","12V EV jump start Orlando","mobile DC fast charging","Central Florida EV charging"],
 alternates:{canonical:"/"},
 robots:{index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}},
 openGraph:{type:"website",locale:"en_US",siteName:"ProZap Mobile EV Charging",title:"24/7 Emergency EV Charging in Orlando | ProZap",description:"Stranded with a dead EV battery? Call ProZap’s 24/7 dispatch line for mobile charging and compatible 12-volt roadside assistance. Availability is confirmed for each request.",url:siteUrl,images:[{url:"/prozap-fleet-banner.png",width:1672,height:941,alt:"ProZap mobile EV charging van assisting an electric vehicle in Central Florida"}]},
 twitter:{card:"summary_large_image",title:"24/7 Emergency EV Charging in Orlando | ProZap",description:"Roadside DC fast charging and compatible 12-volt assistance for Tesla and other EVs across Central Florida. 24/7 dispatch; availability confirmed per request.",images:["/prozap-fleet-banner.png"]},
 icons:{icon:"/favicon.svg",shortcut:"/favicon.svg",apple:"/prozap-logo.png"},
 manifest:"/manifest.webmanifest"
};

const schema={
 "@context":"https://schema.org",
 "@graph":[
  {"@type":["AutomotiveBusiness","LocalBusiness"],"@id":`${siteUrl}/#business`,name:"ProZap Mobile EV Charging",alternateName:"ProZap EV",url:siteUrl,logo:`${siteUrl}/prozap-logo.png`,image:`${siteUrl}/prozap-fleet-banner.png`,telephone:"+1-407-686-2539",email:"Prozap2025@gmail.com",description:"24/7 emergency dispatch line for mobile DC fast charging and compatible 12-volt roadside assistance for electric vehicles in Orlando and Central Florida. Dispatch confirms service availability, ETA, compatibility and pricing.",address:{"@type":"PostalAddress",streetAddress:"4378 L B McLeod Rd",addressLocality:"Orlando",addressRegion:"FL",postalCode:"32811",addressCountry:"US"},hasMap:"https://www.google.com/maps/search/?api=1&query=4378+L+B+McLeod+Rd%2C+Orlando%2C+FL+32811",areaServed:[...["Orlando","Winter Park","Kissimmee","Ocoee","Windermere","Apopka","Altamonte Springs"].map(name=>({"@type":"City",name})),{"@type":"AdministrativeArea",name:"Central Florida"},{"@type":"City",name:"Lake Mary"},{"@type":"Place",name:"Heathrow, Florida"},{"@type":"City",name:"Celebration"}],priceRange:"$$",currenciesAccepted:"USD",contactPoint:{"@type":"ContactPoint",telephone:"+1-407-686-2539",contactType:"24/7 emergency roadside dispatch",areaServed:"US-FL",availableLanguage:"English"},sameAs:["https://www.instagram.com/prozap25/","https://www.tiktok.com/@prozap42","https://www.facebook.com/61590135404264/"]},
  {"@type":"Service","@id":`${siteUrl}/#12v-jump-start`,name:"12-Volt Jump-Start Assistance",serviceType:"12-volt battery jump-start assistance",provider:{"@id":`${siteUrl}/#business`},areaServed:{"@type":"AdministrativeArea",name:"Orlando and Central Florida"},description:"$99 assistance for compatible 12-volt battery systems only. Not a charge or repair for the high-voltage EV traction battery. Vehicle compatibility and dispatch availability must be confirmed.",offers:{"@type":"Offer",price:"99",priceCurrency:"USD",url:`${siteUrl}/emergency-ev-charging`,description:"Compatible 12-volt battery assistance; service availability and vehicle-specific procedure confirmed before dispatch."}},
  {"@type":"WebSite","@id":`${siteUrl}/#website`,url:siteUrl,name:"ProZap Mobile EV Charging",publisher:{"@id":`${siteUrl}/#business`},inLanguage:"en-US"},
  {"@type":"Service","@id":`${siteUrl}/#mobile-ev-charging`,name:"Mobile EV Charging and Roadside Battery Boost",serviceType:["Mobile EV charging","Emergency EV charging","Roadside EV charging","Tesla roadside charging"],provider:{"@id":`${siteUrl}/#business`},areaServed:{"@type":"AdministrativeArea",name:"Central Florida"},description:"A purpose-built ProZap service van brings mobile DC fast charging to stranded electric vehicles, providing usable range without a traditional tow.",offers:{"@type":"Offer",price:"139",priceCurrency:"USD",url:`${siteUrl}/pricing`,description:"Base service call including the first 30 travel miles. Charging-session and applicable extended-distance charges are additional."}}
 ]
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>}