/**
 * Exercise: dashboard_shell.jsx (Topic 1.1)
 * 
 * DESCRIPTION:
 * Create your first React components for the CureSlot Dashboard.
 * 
 * CONSTRAINTS:
 * 1. Ensure you follow JSX rules (return single root element where necessary, close all tags).
 * 2. Ensure your component names start with a capital letter.
 */

// ==========================================
// QUEST 1: The Header
// Create a functional component named `Header`. 
// It should return a `<header>` element with a `className` of "dashboard-header". 
// Inside, include an `<h1>` that says "CureSlot Admin".
// ==========================================
export function Header() {
    return <header className="dashboard-header">
        <h1>
            CureSlot Admin
        </h1>
    </header>
}



// ==========================================
// QUEST 2: The Sidebar Profile
// Create a component named `SidebarProfile`. 
// 1. Define a variable `clinicName` set to "City Health Clinic".
// 2. Return a `<div>` with `className` "profile-section".
// 3. Inside, display an `<img>` tag (use any placeholder URL, self-closing).
// 4. Display the `clinicName` variable in an `<h2>` tag using curly braces `{}`.
// ==========================================

export function SidebarProfile() {
    const clinicName = "City Health Clinic";
    return <div className="profile-section">
        <img src="https://react.dev/images/docs/scientists/QIrZWGIs.jpg" />
        <h2>{clinicName}</h2>
    </div>
}

// ==========================================
// QUEST 3: The Dashboard Layout
// Create a component named `DashboardLayout`. 
// It must return *both* the `Header` component and the `SidebarProfile` component.
// Remember to use a single root element or Fragment `<> ... </>`!
// ==========================================

export default function DashboardLayout() {
    return <>
        <Header />
        <SidebarProfile />
    </>
}
// IMPORTANT: Export DashboardLayout as default so it can be imported elsewhere!
