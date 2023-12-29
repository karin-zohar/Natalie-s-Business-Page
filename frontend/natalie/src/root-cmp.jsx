import React from 'react'
import { Routes, Route } from 'react-router'
import { AppHeader } from './cmps/app-header'
import { HomePage } from './pages/home-page'
import { AppFooter } from './cmps/app-footer'

export function RootCmp() {
    return (
        <div dir="rtl" className="main-layout base-layout">
            <AppHeader />
            <main className="main-layout full">
                <Routes>
                    <Route element={<HomePage />} path="/" />
                </Routes>
            </main>
            <AppFooter />
        </div>
    )
}