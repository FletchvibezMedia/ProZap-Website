import type {Metadata} from "next";
import {ArrowLeft, BatteryCharging, Building2, CarFront, Check, MapPin, Radio, Route, ShieldCheck, UsersRound, Zap} from "lucide-react";
import "./expansion.css";

export const metadata:Metadata={
  title:"Expansion | ProZap Mobile EV Charging",
  description:"ProZap is building a mobile-first EV charging network beyond Central Florida, with Providence, Rhode Island and Boston, Massachusetts planned as coming-soon markets.",
  alternates:{canonical:"/expansion"},
  openGraph:{
    title:"ProZap Expansion | Mobile EV Charging",
    description:"Built in Central Florida. Designed to move farther. Providence, RI and Boston, MA are planned coming-soon markets.",
    url:"https://prozapev.com/expansion"
  }
};

const markets=[
  {
    code:"FL",
    city:"Orlando",
    region:"Central Florida",
    label:"Live now",
    image:"/prozap-fleet-banner.webp",
    alt:"ProZap mobile EV charging van serving an electric vehicle in Central Florida",
    copy:"Our operating home base: real mobile charging, real dispatch, and a working blueprint for the markets ahead.",
    photoCredit:null
  },
  {
    code:"RI",
    city:"Providence",
    region:"Rhode Island",
    label:"Coming soon",
    image:"https://images.unsplash.com/photo-1786308961968-3a19b82aa5bd?auto=format&fit=crop&w=1600&q=84",
    alt:"Rhode Island State House in Providence",
    copy:"A planned Northeast market for drivers, properties and partners looking for a more flexible way to keep EVs moving.",
    photoCredit:{name:"Spencer Liao",url:"https://unsplash.com/photos/rhode-island-state-house-in-providence-IYJQ6OEnBso"}
  },
  {
    code:"MA",
    city:"Boston",
    region:"Massachusetts",
    label:"Coming soon",
    image:"https://images.unsplash.com/photo-1629259376967-aea92216d968?auto=format&fit=crop&w=1600&q=84",
    alt:"Boston skyline and waterfront",
    copy:"A planned Greater Boston market focused on fast mobile support for drivers, fleets, parking operations and commercial partners.",
    photoCredit:{name:"Wei Zeng",url:"https://unsplash.com/photos/1629259376967-aea92216d968"}
  }
];

export default function ExpansionPage(){
  return <main className="expansionPage">
    <header className="innerHeader expansionHeader">
      <a className="brand" href="/"><img width={1859} height={546} src="/prozap-logo-transparent.webp" alt="ProZap Mobile EV Charging"/></a>
      <nav>
        <a href="/#how">How it works</a>
        <a href="/mobile-ev-charging-orlando">Service area</a>
        <a href="/pricing">Pricing</a>
        <a href="/faq">FAQ</a>
        <a href="/expansion" aria-current="page">Expansion</a>
      </nav>
      <a className="call" href="tel:+14076862539">Call now</a>
    </header>

    <section className="expansionHero">
      <div className="heroPhotoPanel" aria-hidden="true">
        <img src="/prozap-fleet-banner.webp" width={1672} height={941} alt=""/>
        <div className="heroPhotoShade"/>
        <span className="heroCoordinates">28.5383° N&nbsp;&nbsp;•&nbsp;&nbsp;81.3792° W</span>
      </div>
      <div className="expansionHeroCopy">
        <a className="back" href="/"><ArrowLeft/>Back to ProZap</a>
        <div className="eyebrow"><i/>The future is mobile</div>
        <h1>Built here.<em> Designed to move.</em></h1>
        <p>ProZap began in Central Florida with a simple belief: when an EV can’t reach power, power should come to the EV. We’re proving it here—and building it to travel.</p>
        <div className="expansionHeroActions">
          <span><Radio/>Live in Central Florida</span>
          <span><Zap/>Mobile EV charging</span>
          <span><Route/>Built to expand</span>
        </div>
      </div>
    </section>

    <section className="planSection" aria-labelledby="plan-title">
      <div className="planLead">
        <div className="eyebrow">The ProZap plan</div>
        <h2 id="plan-title">More than a<br/><em>rescue call.</em></h2>
      </div>
      <div className="planCopy">
        <p>Central Florida is the operating blueprint. Here, ProZap is refining response times, safety procedures, connector coverage and a straightforward customer experience with purpose-built mobile charging equipment.</p>
        <p>As the network grows, the aim is to support the full EV ecosystem: drivers who need range now, fleets that need uptime, and properties or partners that need flexible charging before a permanent station makes sense.</p>
      </div>
    </section>

    <section className="growthGrid" aria-label="ProZap growth priorities">
      <article>
        <div className="growthIcon"><BatteryCharging/></div>
        <h3>Mobile response</h3>
        <p>Roadside, scheduled and event-ready charging that brings commercial-grade power directly to the vehicle.</p>
      </article>
      <article>
        <div className="growthIcon"><UsersRound/></div>
        <h3>Partner power</h3>
        <p>Fleet programs, dealerships, rental operations, property managers and qualified contractor relationships.</p>
      </article>
      <article>
        <div className="growthIcon"><Building2/></div>
        <h3>Permanent future</h3>
        <p>Exploring fixed charging hubs and permanent fixtures where local demand, data and partnerships support them.</p>
      </article>
    </section>

    <section className="marketsSection" aria-labelledby="markets-title">
      <div className="marketsIntro">
        <div>
          <div className="eyebrow">Market roadmap</div>
          <h2 id="markets-title">Our first market.<br/>Our next markets.</h2>
        </div>
        <p>We will expand city by city—only when the local team, equipment and partner network are ready to deliver the ProZap standard.</p>
      </div>
      <div className="marketVisualGrid">
        {markets.map((market,index)=><article className={index===0?"marketVisual active":"marketVisual"} key={market.city}>
          <img src={market.image} alt={market.alt} width={1600} height={900} loading={index===0?"eager":"lazy"}/>
          <div className="marketShade"/>
          <div className="marketVisualCopy">
            <div className="cityLine"><MapPin/>{market.region}<span>{market.label}</span></div>
            <h3>{market.city}</h3>
            <p>{market.copy}</p>
            {index>0&&<div className="comingNote"><Check/>Planned market — service availability will be announced by ProZap.</div>}
          </div>
          {market.photoCredit&&<a className="photoCredit" href={market.photoCredit.url} target="_blank" rel="noreferrer">Photo: {market.photoCredit.name} / Unsplash</a>}
        </article>)}
      </div>
    </section>

    <section className="partnerSection">
      <div className="partnerVisual"><CarFront/><span>EVS KEEP MOVING</span></div>
      <div>
        <div className="eyebrow">Built for the real world</div>
        <h2>Drivers are only the start.</h2>
        <p>ProZap is built to complement—not replace—permanent charging. That makes mobile power valuable during range emergencies, site outages, charger installations, high-demand periods and operations that cannot afford to wait.</p>
        <ul>
          <li><Check/>Commercial and municipal fleets</li>
          <li><Check/>Apartments, hotels, parking and event venues</li>
          <li><Check/>Dealerships, rental operators and contractor partners</li>
        </ul>
      </div>
    </section>

    <section className="expansionFooter">
      <div>
        <div className="eyebrow">Mobility, everywhere</div>
        <h2>Power is going places.</h2>
        <p>Interested in fleet, property or market partnership conversations? Let&apos;s talk.</p>
      </div>
      <a className="button primary" href="mailto:Prozap2025@gmail.com?subject=ProZap%20Expansion%20Inquiry">Start a conversation <ArrowLeft/></a>
    </section>
  </main>
}
