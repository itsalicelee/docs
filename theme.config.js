import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

export default {
  project: {
    link: 'https://github.com/zeabur',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  primaryHue: { dark: 278, light: 265 },
  docsRepositoryBase: 'https://github.com/zeabur/docs/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Zeabur'
    }
  },
  i18n: [
    { locale: 'en-US', text: 'English' },
    { locale: 'zh-TW', text: '繁體中文' },
    { locale: 'zh-CN', text: '简体中文' },
  ],
  logo: <>
    <img
      src="/logo_b.svg"
      style={{ height: 20, objectFit: 'contain' }}
      alt="zeabur"
      className="black-logo"
    />
    <img
      src="/logo_w.svg"
      style={{ height: 20, objectFit: 'contain' }}
      alt="zeabur"
      className="white-logo"
    />
  </>,
  head:()=> {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    const ogEndpoint = 'https://opengraph-dev.zeabur.app/api/og';
    const ogUrl = `${ogEndpoint}?title=${frontMatter.ogImageTitle}&desc=${frontMatter.ogImageSubtitle}`
    return <>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="Zeabur Docs" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="docs.zeabur.com" />
        <meta name="twitter:url" content={`https://docs.zeabur.com${asPath}`} />
        <meta name="twitter:image" content={ogUrl} />

        <meta name="og:title" content="Zeabur: Deploy your service with one click." />
        <meta name="og:description" content="Zeabur: Deploy your service with one click." />
        <meta name="og:url" content={`https://docs.zeabur.com${asPath}`} />
        <meta name="og:image" content={ogUrl} />

        <meta name="apple-mobile-web-app-title" content="Zeabur" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </>;
  },
  footer: {
    text: <span>
      {new Date().getFullYear()} © <a href="https://zeabur.com" target="_blank">Zeabur</a>.
    </span>,
  }
}
