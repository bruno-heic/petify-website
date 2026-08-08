import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Loja",
    items: [
      { name: "Kits", url: "/" },
      { name: "Coleiras", url: "/" },
      { name: "Serviços", url: "/" },
    ],
  },
  {
    title: "Sobre",
    items: [
      { name: "Missão", url: "/" },
      { name: "Visão", url: "/" },
      { name: "Valores", url: "/" },
      { name: "Equipe", url: "/" },
      { name: "Projeto", url: "/" },
    ],
  },
  {
    title: "Suporte",
    items: [
      { name: "Central de ajuda", url: "/" },
      { name: "Contato", url: "/" },
    ],
  },
];

const socialLinks = [
  {
    name: "YouTube",
    url: "https://youtube.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.2 4.8 1.7 5 5 .1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.2 3.3-1.7 4.8-5 5-1.3.1-1.6.1-4.9.1s-3.6 0-4.8-.1c-3.3-.2-4.8-1.7-5-5C2 16.6 2 16.3 2 12s0-3.6.1-4.8c.2-3.3 1.7-4.8 5-5C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1.0 8.3 0 8.7 0 12s0 3.7.1 4.9C.3 21.3 2.7 23.7 7.1 23.9c1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9C23.7 2.7 21.3.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1C0 18.1 4.4 23 10.1 24v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.2h3.4l-.5 3.5h-2.8V24C19.6 23 24 18.1 24 12.1z" />
      </svg>
    ),
  },
  {
    name: "X",
    url: "https://x.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.2 2h3.4l-7.4 8.5L23 22h-6.8l-5.3-7-6.1 7H1.4l7.9-9L1 2h7l4.8 6.4L18.2 2zm-1.2 18h1.9L7.1 4H5.1L17 20z" />
      </svg>
    ),
  },
];

const SocialIcons = () => (
  <div className="flex items-center gap-4">
    {socialLinks.map((social) => (
      <Link
        key={social.name}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors duration-150"
        aria-label={social.name}
      >
        {social.icon}
      </Link>
    ))}
  </div>
);

const Footer = () => {
  return (
    <footer className="footer flex flex-col w-full mt-auto">

      <div className="px-6 md:px-10 pt-10 pb-6">

        <div className="flex justify-center mb-8 md:hidden">
          <Image src="/assets/logo.png" alt="logo" width={90} height={90} />
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">

          <div className="flex flex-wrap gap-10 md:gap-14">
            {footerLinks.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <p className="subtitle-2 text-foreground">{group.title}</p>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.url}
                        className="caption text-muted-foreground hover:text-foreground transition-colors duration-150"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center">
            <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
          </div>

        </div>

        <div className="flex justify-center mt-8 md:hidden">
          <SocialIcons />
        </div>
      </div>

      <div className="border-t border-border px-6 md:px-10 py-5">
        <div className="hidden md:flex relative items-center justify-center">
          <div className="absolute left-0">
            <SocialIcons />
          </div>
          <p className="caption text-muted-foreground text-center">
            Copyright © 2026 Petify. Todos os direitos reservados.
          </p>
        </div>
        <p className="md:hidden caption text-muted-foreground text-center">
          Copyright © 2026 Petify. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  );
};

export default Footer;