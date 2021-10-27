import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout'


export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Blog</title>
                </Head>
                <h1>First Post</h1>
                <h2>
                    <Link href="/">
                        <a>Back to Home</a>
                    </Link>

                    {/* <Image
                        src="/images/perfil.jpg"
                        width={300}
                        height={400}
                        alt="Meu perfil"
                    /> */}

                </h2>
            </Layout>
        </>
    )
}