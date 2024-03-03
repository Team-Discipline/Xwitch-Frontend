import type {Metadata} from 'next'
import './globals.css'
import {Navbar} from "@/components/Navbar";
import {SideBar} from "@/components/SideBar"
import React from "react";


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html>
    <body className="flex flex-col h-[95vh]">
    <div className="flex-0 w-full h-12">
      <Navbar/>
    </div>
    <div className="dShujj">
      <div>
        <SideBar/>
      </div>
      <div className="InjectLayout-sc-1i43xsx-0 iA-duFH twilight-main">
        <header id="twilight-sticky-header-root"></header>
        <div className="root-scrollable scrollable-area" data-a-target="root-scroller" data-simplebar="init">
          <div className="simplebar-track vertical" style={{visibility: 'visible'}}>
            <div className="simplebar-scrollbar" style={{top: '2px', height: '597px'}}></div>
          </div>
          <div className="simplebar-track horizontal" style={{visibility: 'hidden'}}>
            <div className="simplebar-scrollbar" style={{left: '2px', width: '1055px'}}></div>
          </div>
          <div className="simplebar-scroll-content" style={{paddingRight: '22px', marginBottom: '-44px'}}>
            <div className="simplebar-content home__scrollable-content"
                 style={{paddingBottom: '22px', marginRight: '-22px'}}>
              <div className="Layout-sc-1xcs6mc-0 jNrYjU root-scrollable__wrapper">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Layout-sc-1xcs6mc-0 fYwRhm snackbar-list__container snackbar-overlay__list" aria-live="polite">
        <div className="Layout-sc-1xcs6mc-0 iEVzKC">
          <div className="InjectLayout-sc-1i43xsx-0 hWukFy snackbar-list__items tw-transition-group"></div>
        </div>
      </div>
    </div>

    </body>
    </html>
  )
}
