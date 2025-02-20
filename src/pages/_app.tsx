// pages/_app.tsx
import type { AppProps } from 'next/app';
import { QueryClientProvider } from '@tanstack/react-query';
import '../styles/globals.css';
import { queryClient } from "@/lib/react-query";
import 'font-awesome/css/font-awesome.min.css';
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from '@/lib/createEmotionCache';
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const clientSideEmotionCache = createEmotionCache();
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
export default function App(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: {  ...pageProps },
  } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      <Analytics />
      <SpeedInsights />
    </CacheProvider>
  );
}

