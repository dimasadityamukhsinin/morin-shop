import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import { NextSeo } from 'next-seo'
import Header from '@/components/modules/header'
import { FormPayment } from '@/components/utils/payment'

export default function PaymentConfirmation() {
  return (
    <>
      <Header home={false} />
      <Layout>
        <NextSeo title="Payment Confirmation" />
        <div className="bg-white w-full">
          <Container className="flex flex-col text-morin-blue mb-16">
            <h2 className="text-mtitle lg:text-h2 leading-none font-nutmeg text-center">
              Payment Confirmation
            </h2>
            <FormPayment />
          </Container>
        </div>
        <Footer className="w-full" />
      </Layout>
    </>
  )
}