import type { Metadata, Viewport } from 'next';
import './globals.css';
import {data,baseUrl} from '@/lib/data';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SeoJsonLd from '@/components/seo-jsonld';
export const metadata: Metadata = {
 metadataBase:new URL(baseUrl), title:{default:data.site.title,template:`%s | ${data.profile.name}`},description:data.site.description,
 alternates:{canonical:'/'}, robots:{index:true,follow:true},
 openGraph:{type:'website',url:'/',title:data.site.title,description:data.site.description,siteName:data.profile.name,locale:data.site.locale,images:[{url:'/og-image.svg',width:1200,height:630,alt:data.site.title}]},
 twitter:{card:'summary_large_image',title:data.site.title,description:data.site.description,images:['/og-image.svg']}
};
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:data.site.themeColor};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body id="top"><a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-acid focus:px-4 focus:py-3">Skip to content</a><SeoJsonLd/><Header/>{children}<Footer/></body></html>}
