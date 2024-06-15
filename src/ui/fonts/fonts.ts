import { Inter, Rubik, Open_Sans } from "next/font/google";
import localFont from "next/font/local";

// define your variable fonts
const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"], variable: "--font1" });
const open_sans = Open_Sans({ subsets: ["latin"], variable: "--font2" });
// // define 2 weights of a non-variable font
// const sourceCodePro400 = Source_Sans_3({ weight: "400" });
// const sourceCodePro700 = Source_Sans_3({ weight: "700" });
// // define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
// const greatVibes = localFont({ src: "./GreatVibes-Regular.ttf" });

export { inter, rubik, open_sans };
