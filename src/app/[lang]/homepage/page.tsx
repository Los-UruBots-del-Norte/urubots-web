import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createClient } from '@/prismicio';
import Layout from '@/components/Layout';
import { getLocales } from '@/lib/getLocales';
import { SliceZone } from '@prismicio/react';
import { components } from '@/slices';
import { getMenuItems } from '@/components/Utils/MenuItems';
import { asText } from "@prismicio/client";
type Params = { uid: string };
export const dynamicParams = false;

export async function generateMetadata({params}: {params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("homepage", uid).catch(() => notFound());

  return {
    // @ts-ignore
    title: asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title ?? undefined,
      images: [{ url: page.data.meta_image.url ?? "" }],
    },
  };
}

export default async function Page({params: { uid, lang }}: { params: { uid: string; lang: string }}) {
  const client = createClient();
  const page = await client
    .getByUID('homepage', uid, { lang })
    .catch(() => notFound());

  const locales = await getLocales(page, client);
  const navigation = getMenuItems(lang);

  return (
    <Layout locales={locales} navigation={navigation}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType('homepage', { lang: '*' });
  return pages.map((page) => {
    return {
      uid: page.uid,
      lang: page.lang,
    };
  });
}
