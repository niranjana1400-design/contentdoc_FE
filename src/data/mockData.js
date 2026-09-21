export const mockScreens = [
  {
    id: 1,
    name: "Landing Page",
    purpose: "Introduce the product and encourage users to get started.",
    image: "https://placehold.co/900x500?text=Landing+Page",
    headings: ["Create Better Content", "Turn Figma Into Documentation"],
    paragraphs: [
      "Convert your Figma designs into structured content documents.",
      "Review, edit and export your content easily."
    ],
    buttons: ["Get Started", "Learn More"],
    formFields: [],
    navigation: ["Home", "Features", "About", "Contact"]
  },
  {
    id: 2,
    name: "Login",
    purpose: "Allow existing users to securely access their account.",
    image: "https://placehold.co/900x500?text=Login+Page",
    headings: ["Welcome Back"],
    paragraphs: ["Sign in to continue to your account."],
    buttons: ["Login", "Forgot Password"],
    formFields: ["Email", "Password"],
    navigation: ["Home", "Login", "Signup"]
  },
  {
    id: 3,
    name: "Dashboard",
    purpose: "Give users an overview of their content documents.",
    image: "https://placehold.co/900x500?text=Dashboard",
    headings: ["Dashboard", "Your Documents"],
    paragraphs: [
      "Manage and review your generated content documents."
    ],
    buttons: ["Create Document", "View Document"],
    formFields: ["Search"],
    navigation: ["Dashboard", "Documents", "Settings"]
  },
  {
    id: 4,
    name: "Profile",
    purpose: "Allow users to view and update their profile information.",
    image: "https://placehold.co/900x500?text=Profile",
    headings: ["Profile Settings"],
    paragraphs: ["Manage your personal information and preferences."],
    buttons: ["Save Changes"],
    formFields: ["Name", "Email", "Phone"],
    navigation: ["Dashboard", "Profile", "Settings"]
  }
];