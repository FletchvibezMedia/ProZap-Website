import type {Metadata} from "next";
import {ArrowLeft, BatteryCharging, MapPin, Radio, Route, ShieldCheck, Zap} from "lucide-react";
import "./expansion.css";

export const metadata:Metadata={
  title:"Expansion | ProZap Mobile EV Charging",
  description:"ProZap is building toward mobile EV charging coverage beyond Central Florida, with Providence, Rhode Island and Boston, Massachusetts planned as coming-soon markets.",
  alternates:{canonical:"/expansion"},
  openGraph:{
    title:"ProZap Expansion | Mobile EV Charging",
    description:"Mobile EV charging is moving beyond Central Florida. Providence, RI and Boston, MA are coming soon.",
    url:"https://prozapev.com/expansion"
  }
};

const markets=[
  {state:"FL",city:"Central Florida",label:"LIVE NOW",detail:"Orlando-based mobile EV charging and roadside support.",status:"Active service"},
  {state:"RI",city:"Providence",label:"COMING SOON",detail:"Planned mobile EV charging coverage for Rhode Island drivers and local partners.",status:"Future market"},
  {state:"MA",city:"Boston",label:"COMING SOON",detail:"Planned mobile EV charging coverage for Greater Boston drivers, fleets and properties.",status:"Future market"}
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
      <div className="expansionGlow expansionGlowOne"/>
      <div className="expansionGlow expansionGlowTwo"/>
      <div className="expansionHeroCopy">
        <a className="back" href="/"><ArrowLeft/>Back to ProZap</a>
        <div className="eyebrow"><i/>The next charge is closer than you think</div>
        <h1>Mobility,<em> everywhere.</em></h1>
        <p>ProZap is building a mobile EV-charging network designed to bring dependable power directly to drivers, fleets, properties and events—wherever charging is needed.</p>
        <div className="expansionHeroActions">
          <span><Radio/>Expanding market access</span>
          <span><Zap/>Mobile-first charging</span>
        </div>
      </div>
      <div className="expansionRoute" aria-label="Current and planned ProZap markets">
        <div className="routeLine"/>
        <div className="routeDot routeDotLive"><span>01</span><strong>Orlando</strong><small>Florida · Live now</small></div>
        <div className="routeDot routeDotProvidence"><span>02</span><strong>Providence</strong><small>Rhode Island · Coming soon</small></div>
        <div className="routeDot routeDotBoston"><span>03</span><strong>Boston</strong><small>Massachusetts · Coming soon</small></div>
      </div>
    </section>

    <section className="marketSection" aria-labelledby="market-title">
      <div className="marketSectionIntro">
        <div className="eyebrow">ProZap market roadmap</div>
        <h2 id="market-title">Power that moves with people.</h2>
        <p>Every ProZap market is built around the same idea: fast, professional mobile EV charging without forcing a driver to find, wait for, or tow to a fixed station.</p>
      </div>
      <div className="marketGrid">
        {markets.map((market,index)=><article className={index===0?"marketCard active":"marketCard"} key={market.city}>
          <div className="marketCardTop"><span>{market.state}</span><small>{market.label}</small></div>
          <h3>{market.city}</h3>
          <p>{market.detail}</p>
          <div className="marketCardFoot"><MapPin/>{market.status}</div>
        </article>)}
      </div>
    </section>

    <section className="expansionPromise">
      <div className="promiseIcon"><BatteryCharging/></div>
      <div>
        <div className="eyebrow">Built to scale responsibly</div>
        <h2>Local service. A bigger vision.</h2>
        <p>ProZap’s expansion plan is centered on real operating readiness: local response, the right equipment, and a better option for drivers who need power now—not eventually.</p>
      </div>
      <div className="promisePoints">
        <span><Route/>Roadside &amp; scheduled charging</span>
        <span><ShieldCheck/>Professional, purpose-built equipment</span>
        <span><Zap/>Support for drivers, fleets &amp; properties</span>
      </div>
    </section>

    <section className="expansionFooter">
      <div>
        <div className="eyebrow">Stay connected</div>
        <h2>From Central Florida to the next mile.</h2>
      </div>
      <a className="button primary" href="mailto:Prozap2025@gmail.com?subject=ProZap%20Expansion%20Inquiry">Talk expansion <ArrowLeft/></a>
    </section>
  </main>
}
