//destructuring 
const user = {
  id: "usr_2847",
  username: "tany_codes",
  personalInfo: {
    firstName: "Tany",
    lastName: "Godzi",
    age: 18,
    gender: "Male",
    contact: {
      email: "tany@example.com",
      phone: "+91 9876543210"
    }
  },

  address: {
    current: {
      street: "MG Road",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      pincode: "400001"
    },
    permanent: {
      street: "Station Road",
      city: "Pune",
      state: "Maharashtra",
      country: "India",
      pincode: "411001"
    }
  },

  social: {
    github: "github.com/tany",
    linkedin: "linkedin.com/in/tany",
    twitter: "@tanycodes",
    portfolio: "tany.dev"
  },

  preferences: {
    theme: "dark",
    language: "en",
    notifications: {
      email: true,
      sms: false,
      push: true
    },
    privacy: {
      profileVisible: true,
      showEmail: false
    }
  },

  education: {
    college: "ABC Engineering College",
    degree: "B.E. Computer Engineering",
    year: 2,
    skills: [
      "JavaScript",
      "React",
      "SQL",
      "Node.js"
    ]
  },

  projects: [
    {
      id: 1,
      name: "Expense Tracker",
      stars: 15
    },
    {
      id: 2,
      name: "AI Study Assistant",
      stars: 32
    }
  ]
};
const {firstName,lastName}=user.personalInfo;
const {email}=user.personalInfo.contact;
console.log("first name:"+firstName);
console.log("last name:"+lastName);
console.log("email:"+email);
