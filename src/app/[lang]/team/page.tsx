import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createClient } from '@/prismicio';
import Layout from '@/components/Layout';
import { getLocales } from '@/lib/getLocales';
import { SliceZone } from '@prismicio/react';
import { components } from '@/slices';
import { getMenuItems } from '@/components/Utils/MenuItems';
import { isFilled, asImageSrc } from "@prismicio/client";

export const dynamicParams = false;
type Params = { uid: string };

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

// export async function generateMetadata({params}: {
//     params: Promise<Params>;
// }): Promise<Metadata> {
//     const { uid } = await params;
//     const client = createClient();
//     const page = await client.getByUID("team", uid).catch(() => notFound());
//
//     return {
//         title: page.data.meta_title,
//         description: page.data.meta_description,
//         openGraph: {
//             title: isFilled.keyText(page.data.meta_title)
//                 ? page.data.meta_title
//                 : undefined,
//             description: isFilled.keyText(page.data.meta_description)
//                 ? page.data.meta_description
//                 : undefined,
//             images: isFilled.image(page.data.meta_image)
//                 ? [asImageSrc(page.data.meta_image)]
//                 : undefined,
//         },
//     };
// }


export default async function Page({params: { lang, uid } }: { params: { lang: string; uid: string }; }) {
    // console.log('#### team ###', lang, uid);
    const client = createClient();
    const page = await client
        .getByUID('team', 'team', { lang })
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
//   const pages = await client.getAllByType('team', { lang: '*' });
//   return pages.map((page) => {
//     return {
//       uid: page.uid,
//       lang: page.lang,
//     };
//   });
// }
