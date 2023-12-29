import { Link } from "react-router-dom"
import { AppNav } from "./app-nav"

export function AppHeader() {
    return (
        <header className="app-header main-layout full">
            <div>
                header
            </div>
            <AppNav />
        </header>
    )
}