import "./globals.css";
import { ReactNode } from "react";
import "./styles.css";
import { Poppins } from 'next/font/google';


interface LayoutProps {
  children: ReactNode;
}

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en" className={poppins.className}>
      <body
        className="min-h-screen flex flex-col "
        style={{
          backgroundImage: `url('/main-bg.webp')`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <main className="">{children}</main>
        
      </body>
    </html>
  );
};

export default Layout;
