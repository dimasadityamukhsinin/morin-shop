import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import { NextSeo } from 'next-seo'
import HeaderGap from '@/components/modules/headerGap'
import Header from '@/components/modules/header'

export default function TermsConditions() {
  return (
    <>
      <Header home={false} />
      <Layout>
        <NextSeo title="Terms & Conditions" />
        <div className="bg-white w-full">
          <Container className="flex flex-col text-morin-blue mb-10 md:mb-16">
            <h2 className="text-mtitle lg:text-h2 leading-none font-nutmeg text-center">
              Terms & Conditions
            </h2>
            <p className="max-w-5xl mt-3 mx-auto font-medium">
              Updated November 17th, 2021 <br /> <br /> Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Bibendum turpis aliquam,
              viverra netus amet in vel auctor amet. Scelerisque a sagittis
              ornare in sit. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Bibendum turpis aliquam, viverra netus amet in vel auctor
              amet. Scelerisque a sagittis ornare in sit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Bibendum turpis aliquam,
              viverra netus amet in vel auctor amet. Scelerisque a sagittis
              ornare in sit. <br /> <br /> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Bibendum turpis aliquam, viverra
              netus amet in vel auctor amet. Scelerisque a sagittis ornare in
              sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Bibendum turpis aliquam, viverra netus amet in vel auctor amet.
              Scelerisque a sagittis ornare in sit. <br /> <br /> Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Bibendum turpis
              aliquam, viverra netus amet in vel auctor amet. Scelerisque a
              sagittis ornare in sit. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Bibendum turpis aliquam, viverra netus amet in
              vel auctor amet. Scelerisque a sagittis ornare in sit. <br />{' '}
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Bibendum turpis aliquam, viverra netus amet in vel auctor amet.
              Scelerisque a sagittis ornare in sit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Bibendum turpis aliquam, viverra
              netus amet in vel auctor amet. Scelerisque a sagittis ornare in
              sit.
            </p>
          </Container>
        </div>
        <Footer />
      </Layout>
    </>
  )
}
