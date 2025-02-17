import {createClient} from "@/prismicio";
import {notFound} from "next/navigation";
import {getLocales} from "@/lib/getLocales";
import {getMenuItems} from "@/components/Utils/MenuItems";
import Layout from "@/components/Layout";
import {SliceZone} from "@prismicio/react";
import {components} from "@/slices";
import {BlogItem} from "@/components/BlogItem";

export default async function Page({params: {uid, lang}}: { params: { uid: string; lang: string }; }) {
    console.log('##### blogpost ####', uid, lang);
    const client = createClient();
    const page = await client
        .getByUID('blogpost', uid, {lang})
        .catch(() => notFound());

    console.log('##### page ####', page);

    const locales = await getLocales(page, client);
    const navigation = getMenuItems(lang);

    return (
        <Layout locales={locales} navigation={navigation}>
            {/*<SliceZone slices={page.data.slices} components={components}/>*/}
            <BlogItem slice={page.data} />
        </Layout>
    );
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType('blogpost', { lang: '*' });
  return pages.map((page) => {
    return {
      uid: page.uid,
      lang: page.lang,
    };
  });
}
