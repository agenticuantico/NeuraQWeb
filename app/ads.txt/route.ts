import {NextResponse} from 'next/server'
export function GET(){return new NextResponse(process.env.ADS_TXT_CONTENT||'',{headers:{'content-type':'text/plain; charset=utf-8'}})}