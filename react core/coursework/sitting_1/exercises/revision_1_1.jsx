/**
 * Exercise: revision_1_1.jsx (Topic 1.1 Revision)
 * 
 * SCENARIO:
 * CureSlot needs a Doctor Quick-Panel for the admin dashboard.
 * Put all the Topic 1.1 rules into practice:
 * 1. Functional components (Capitalized names)
 * 2. JSX Rules (className, self-closing tags, single root/Fragment)
 * 3. Embedding JS with {} (variables, math expressions, ternary operators)
 * 4. Named exports vs. Default export
 */

// ==========================================
// QUEST 1: DoctorStats (Named Export + Expressions)
// 1. Create and export a component named `DoctorStats`.
// 2. Inside the function, define:
//    const totalAppointments = 14;
//    const cancelledAppointments = 3;
// 3. Return a <div> with className="stats-box".
// 4. Inside the div, include:
//    - <h3>Today's Schedule</h3>
//    - A <p> tag showing the active appointments calculated inside curly braces:
//      "Active Patients: " followed by {totalAppointments - cancelledAppointments}
// ==========================================

// TODO: Write Quest 1 here
export function DoctorStats() {
    const totalAppointments = 14;
    const cancelledAppointments = 3;
    return <div className="stats-box">
        <h3>Today's Schedule</h3>
        <p>Active pations: {totalAppointments - cancelledAppointments}</p>
    </div>
}


// ==========================================
// QUEST 2: DoctorBadge (Named Export + JSX Rules + Ternary)
// 1. Create and export a component named `DoctorBadge`.
// 2. Inside the function, define:
//    const doctorName = "Dr. Priya Patel";
//    const isAvailable = true;
//    const avatarUrl = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2";
// 3. Return a <div> with className="doctor-badge".
// 4. Inside the div:
//    - An <img /> tag with src set to {avatarUrl} and alt set to {doctorName} (remember to self-close!).
//    - An <h2> tag displaying the {doctorName}.
//    - A <p> tag displaying status using a ternary expression:
//      {isAvailable ? "🟢 Available for Walk-ins" : "🔴 On Leave"}
//    - A self-closing <hr /> tag at the bottom.
// ==========================================

// TODO: Write Quest 2 here
export function DoctorBadge() {
    const doctorName = "Dr. Priya Patel";
    const isAvailable = true;
    const avatarUrl = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2";
    return <div className="doctor-badge">
        <img src={avatarUrl} alt={doctorName} />
        <h2>{doctorName}</h2>
        <p>isAvailable ? "🟢 Available for Walk-ins" : "🔴 On Leave" </p>
        <hr />
    </div>
}




// ==========================================
// QUEST 3: DoctorPanel (Default Export + Composition + Fragment)
// 1. Create and export as DEFAULT a component named `DoctorPanel`.
// 2. It must return BOTH <DoctorBadge /> and <DoctorStats />.
// 3. Remember the JSX single-root rule: wrap them in a Fragment (<> ... </>).
// ==========================================

// TODO: Write Quest 3 here
export default function DoctorPanel() {
    return <>
        <DoctorBadge />
        <DoctorStats />
    </>
}