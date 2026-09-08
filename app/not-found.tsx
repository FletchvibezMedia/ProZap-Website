import type {Metadata} from "next";
import {Home,Phone,Zap} from "lucide-react";

export const metadata:Metadata={title:"Page Not Found",robots:{index:false,follow:true}};

export default function NotFound(){return <main className="notFoundPage"><Zap/><div className="eyebrow">Wrong turn</div><h1>This page ran out of juice.</h1><p>The ProZap service is still fully charged. Return home or call dispatch if your EV is stranded.</p><div className="actions"><a className="button primary" href="/"><Home/>Back to ProZap</a><a className="button ghost" href="tel:+14076862539"><Phone/>Call 407-686-2539</a></div></main>}
