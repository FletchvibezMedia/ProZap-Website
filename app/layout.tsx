import type {Metadata} from "next";
import "./globals.css";
import "./overrides.css";

const siteUrl="https://prozapev.com";

export const metadata:Metadata={
 metadataBase:new URL(siteUrl),
 title:{default:"Mobile EV Charging Orlando | ProZap Roadside Charging",template:"%s | ProZap"},
 description:"Dead EV battery in Orlando? ProZap delivers mobile DC fast charging for Tesla and other EVs across Central Florida. Call 407-686-2539 for roadside power.",
 applicationName:"ProZap Mobile EV Charging",
 category:"automotive",
 keywords:["mobile EV charging Orlando","emergency EV charging near me","roadside EV charging","Tesla roadside charging Orlando","dead electric car battery help","electric car roadside assistance","EV towing alternative","mobile DC fast charging","Central Florida EV charging"],
 alternates:{canonical:"/"},
 robots:{index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}},
 openGraph:{type:"website",locale:"en_US",siteName:"ProZap Mobile EV Charging",title:"Mobile EV Charging in Orlando | ProZap",description:"Stranded with a dead EV battery? ProZap brings mobile DC fast charging to you across Central Florida.",url:siteUrl,images:[{url:"/prozap-fleet-banner.png",width:1672,height:941,alt:"ProZap mobile EV charging van assisting an electric vehicle in Central Florida"}]},
 twitter:{card:"summary_large_image",title:"Mobile EV Charging in Orlando | ProZap",description:"Roadside DC fast charging for Tesla and other EVs across Central Florida.",images:["/prozap-fleet-banner.png"]},
 icons:{icon:"/favicon.svg",shortcut:"/favicon.svg",apple:"/prozap-logo-transparent.png"},
 manifest:"/manifest.webmanifest"
};

const schema={
 "@context":"https://schema.org",
 "@graph":[
  {"@type":["AutomotiveBusiness","LocalBusiness"],"@id":`${siteUrl}/#business`,name:"ProZap Mobile EV Charging",alternateName:"ProZap EV",url:siteUrl,logo:`${siteUrl}/prozap-logo-transparent.png`,image:`${siteUrl}/prozap-fleet-banner.png`,telephone:"+1-407-686-2539",email:"Prozap2025@gmail.com",description:"On-demand mobile DC fast charging and roadside battery assistance for electric vehicles in Orlando and Central Florida.",address:{"@type":"PostalAddress",streetAddress:"4378 L B McLeod Rd",addressLocality:"Orlando",addressRegion:"FL",postalCode:"32811",addressCountry:"US"},hasMap:"https://www.google.com/maps/search/?api=1&query=4378+L+B+McLeod+Rd%2C+Orlando%2C+FL+32811",areaServed:[...["Orlando","Winter Park","Kissimmee","Ocoee","Windermere","Apopka","Altamonte Springs"].map(name=>({"@type":"City",name})),{"@type":"AdministrativeArea",name:"Central Florida"}],priceRange:"$$",currenciesAccepted:"USD",contactPoint:{"@type":"ContactPoint",telephone:"+1-407-686-2539",contactType:"roadside dispatch",areaServed:"US-FL",availableLanguage:"English"},sameAs:["https://www.instagram.com/prozap25/","https://www.tiktok.com/@prozap42","https://www.facebook.com/prozap25"]},
  {"@type":"WebSite","@id":`${siteUrl}/#website`,url:siteUrl,name:"ProZap Mobile EV Charging",publisher:{"@id":`${siteUrl}/#business`},inLanguage:"en-US"},
  {"@type":"Service","@id":`${siteUrl}/#mobile-ev-charging`,name:"Mobile EV Charging and Roadside Battery Boost",serviceType:["Mobile EV charging","Emergency EV charging","Roadside EV charging","Tesla roadside charging"],provider:{"@id":`${siteUrl}/#business`},areaServed:{"@type":"AdministrativeArea",name:"Central Florida"},description:"A purpose-built ProZap service van brings mobile DC fast charging to stranded electric vehicles, providing usable range without a traditional tow.",offers:{"@type":"Offer",price:"139",priceCurrency:"USD",url:`${siteUrl}/pricing`,description:"Base service call including the first 30 travel miles. Charging-session and applicable extended-distance charges are additional."}}
 ]
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>}
