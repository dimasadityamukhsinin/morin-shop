import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import { NextSeo } from 'next-seo'
import HeaderGap from '@/components/modules/headerGap'
import Header from '@/components/modules/header'
import WaButton from '@/components/utils/buttons/WaButton'
import axios from 'axios'

export default function PrivacyPolicy({ privacy }) {
  return (
    <>
      <Header home={false} />
      <Layout>
        <HeaderGap />
        <NextSeo title="Privacy Policy" />
        <div className="bg-white w-full">
          <Container className="flex flex-col text-morin-blue mt-4 md:mt-0 mb-10 md:mb-16">
            <h2 className="text-4xl lg:text-h2 leading-none font-nutmeg text-center">
              Privacy Policy
            </h2>
            <p
              className="max-w-2xl w-full mt-3 mx-auto font-medium px-5"
              dangerouslySetInnerHTML={{ __html: privacy.body }}
            ></p>
            <WaButton />
          </Container>
        </div>
        <Footer />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const getData = await axios.get(
    'https://morin-jams.myshopify.com/admin/api/2022-04/policies.json',
    {
      headers: {
        'X-Shopify-Access-Token': process.env.STOREFRONT_KEY,
      },
    },
  )
  const privacy = getData.data.policies.find(
    (data) => data.handle === 'privacy-policy',
  )
  return {
    props: {
      privacy,
    },
  }
}
