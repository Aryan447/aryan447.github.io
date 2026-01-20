import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
// import { Manrope, Playfair_Display } from "next/font/google";
import appCss from "./globals.css?url";

// const manrope = Manrope({
//     subsets: ["latin"],
//     weight: ["200", "300", "400", "500", "600"],
//     variable: "--font-manrope",
//     display: "swap",
// });
//
// const playfair = Playfair_Display({
//     subsets: ["latin"],
//     weight: ["400", "600", "700"],
//     style: ["normal", "italic"],
//     variable: "--font-playfair",
//     display: "swap",
// });

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "Aryan | Portfolio" }
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  component: RootLayout,
})

function RootLayout() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}

// export default function RootLayout({
//     children,
// }: Readonly<{
//     children: React.ReactNode;
// }>) {
//     return (
//         <html lang="en" className={`${manrope.variable} ${playfair.variable}`} >
//             <body className="antialiased font-sans">
//                 {children}
//             </body>
//         </html>
//     );
// }
