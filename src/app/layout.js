import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohamed Thowfick - Cybersecurity, VAPT, Ethical Hacker, Web Developer, Full-Stack Developer",
  description: "Mohamed Thowfick is an Ethical Hacker, Cybersecurity Expert, Web Developer, and Full-Stack Developer showcasing projects and skills in the IT industry.",
  author: "Mohamed Thowfick",
  keywords: [
    "Mohamed Thowfick",
    "Thowfick Official",
    "Ethical Hacker",
    "Cybersecurity Expert",
    "Web Developer",
    "Full-Stack Developer",
    "IT Projects",
    "Skills",
    "Portfolio",
  ],
  socialLinks: [
    "https://www.instagram.com/thowfick_official",
    "https://twitter.com/thowfickofficial",
    "https://www.linkedin.com/in/thowfickofficial",
    "https://github.com/thowfickofficial",
    "https://www.facebook.com/thowfickofficial",
  ],
  imageUrl: "https://thowfickofficial.netlify.app/static/media/bannerImg.d64428945cab2208a934.png",
  siteUrl: "https://thowfickofficial.netlify.app/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content={metadata.author} />
        <link rel="icon" href="/logo.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" />
        <meta name="application-name" content="Thowfick's Portfolio" />
        <meta name="robots" content="index, follow" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Thowfick's Portfolio" />
        {metadata.socialLinks.map((link, index) => (
          <link key={index} rel="me" href={link} />
        ))}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Mohamed Thowfick",
            "image": metadata.imageUrl,
            "url": metadata.siteUrl,
            "description": metadata.description,
            "jobTitle": "Ethical Hacker, Cybersecurity Expert, Web Developer, Full-Stack Developer",
            "sameAs": metadata.socialLinks,
            "keywords": metadata.keywords.join(", "),
          })}
        </script>
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
