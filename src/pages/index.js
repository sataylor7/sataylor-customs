import Head from 'next/head'
import Hero from '@components/hero';
import ProductList from '@components/product-list';
import Layout from '@layouts/general';
import { DEFAULTS } from '@configs/site';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{DEFAULTS.defaultTitle}</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        />
        <meta name='description' content={DEFAULTS.defaultDescription} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero/>
      <ProductList />
    </Layout>
  );
}
