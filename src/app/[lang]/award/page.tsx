import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createClient } from '@/prismicio';
import Layout from '@/components/Layout';
import { getLocales } from '@/lib/getLocales';
import { SliceZone } from '@prismicio/react';
import { components } from '@/slices';
import { getMenuItems } from '@/components/Utils/MenuItems';

export const dynamicParams = false;

// export async function generateMetadata({ params } : { params: { lang: string }}) {
//     const client = createClient();
//     const page = await client
//         .getByUID("about", "about", { lang: params.lang })
//         .catch(() => notFound());
//
//     return {
//         title: page.data.meta_title,
//     };
// }

export default async function Page({
  params: { lang, uid },
}: {
  params: { lang: string; uid: string };
}) {
  // console.log('#### award ###', lang, uid);
  const client = createClient();
  const page = await client
    .getByUID('award', 'award', { lang })
    .catch(() => notFound());

  const locales = await getLocales(page, client);
  const navigation = getMenuItems(lang);

  return (
    <Layout locales={locales} navigation={navigation}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

// export async function generateStaticParams() {
//   const client = createClient();
//   const pages = await client.getAllByType('about', { lang: '*' });
//   console.log('### generateStaticParams about ###', pages);
//   return pages.map((page) => {
//     return {
//       uid: page.uid,
//       lang: page.lang,
//     };
//   });
// }
