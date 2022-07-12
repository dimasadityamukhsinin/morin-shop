import { useEffect, useState } from 'react'
import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import FancyLink from '@/components/utils/fancyLink'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import HeaderGap from '@/components/modules/headerGap'
import { Minus, Plus } from '@/components/utils/svg'
import colors from '@/helpers/preset/colors'
import MorinButton from '@/components/utils/morinButton'
import Header from '@/components/modules/header'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css/pagination'
import MorinTabs from '@/components/utils/morinTabs'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import SliderDesktop from '@/components/modules/sliderDesktop'
import SliderMobile from '@/components/modules/sliderMobile'
import { parseShopifyResponse, shopifyClient } from '@/helpers/shopify'

export default function ProductSlug({product}) {
  const sizeData = [
    {
      id: 'size-1',
      title: '17gr',
      value: '17gr',
      ariaText: 'Size 17gr',
    },
    {
      id: 'size-2',
      title: '170gr',
      value: '170gr',
      ariaText: 'Size 170gr',
    },
    {
      id: 'size-3',
      title: '330gr',
      value: '330gr',
      ariaText: 'Size 330gr',
    },
    {
      id: 'size-4',
      title: '590gr',
      value: '590gr',
      ariaText: 'Size 590gr',
    },
  ]

  const sliderData = [
    {
      imgSrc: '/product/blueberry.png',
      imgAlt: 'Blueberry Jam',
    },
    {
      imgSrc: '/product/blueberry.png',
      imgAlt: 'Blueberry Jam',
    },
    {
      imgSrc: '/product/blueberry.png',
      imgAlt: 'Blueberry Jam',
    },
    {
      imgSrc: '/product/blueberry.png',
      imgAlt: 'Blueberry Jam',
    },
    {
      imgSrc: '/product/blueberry.png',
      imgAlt: 'Blueberry Jam',
    },
    {
      imgSrc: '/product/blueberry.png',
      imgAlt: 'Blueberry Jam',
    },
  ]

  return (
    <Layout>
      <NextSeo title={product.handle} />
      <Header home={false} />
      <div className="bg-white w-full">
        <HeaderGap />
        <Container className="flex flex-col md:flex-row w-full md:gap-16 h-full mb-10 md:mb-24">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="relative hidden lg:block w-full h-full aspect-w-1 aspect-h-1 rounded-3xl overflow-hidden">
              <Image
                src={product.images[0].src}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
            {useMediaQuery('(min-width: 768px)') ? (
              <SliderDesktop data={sliderData} />
            ) : (
              <SliderMobile data={sliderData} />
            )}
          </div>
          <div className="w-full md:w-1/2 flex flex-col mt-5 md:mt-0 space-y-5 md:space-y-8 text-morin-blue">
            <div className="w-full flex flex-col">
              <h2 className="text-ctitle md:text-h2 font-nutmeg font-normal m-0">
                {product.title}
              </h2>
              <h3 className="text-mtitleSmall md:text-ctitle font-normal m-0">
                IDR {product.variants[0].price}
              </h3>
            </div>
            <div>
              <span className="font-medium hidden md:block">select size</span>
              <MorinTabs tabData={sizeData} className="md:mt-3" />
            </div>
            <div className="flex w-full h-12 md:h-auto">
              <div className="flex justify-between items-center mr-4 md:mr-6 px-5 pt-1 md:pt-3 md:pb-2 h-full md:h-auto rounded-full border-2 border-morin-blue w-32">
                <FancyLink className="pb-1.5 md:pb-2">
                  <Minus />
                </FancyLink>
                <span className="font-medium text-default md:text-ctitleSmall">
                  1
                </span>
                <FancyLink className="pb-0.5">
                  <Plus />
                </FancyLink>
              </div>
              <FancyLink className="w-44 h-full md:h-auto md:w-40 lg:w-52 rounded-full bg-header shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] font-semibold text-default md:text-[20px] lg:text-[26px] text-white">
                Add to Cart
              </FancyLink>
            </div>
            <div className="flex flex-col md:max-w-md">
              <p className="font-medium text-[12px] md:text-default">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                enim nulla scelerisque viverra scelerisque eu. Dolor sit amet,
                consectetur adipiscing elit. Sit enim nulla scelerisque viverra
                sc. <br />
                <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sit enim nulla scelerisque viverra scelerisque eu. Dolor sit
                amet.
              </p>
              <MorinButton
                color={colors.morinBlue}
                border
                showText
                arrow="right"
                className="mt-5 md:mt-8 h-[30px]"
              >
                View Products Details
              </MorinButton>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  // Fetch all the products
  const products = await shopifyClient.product.fetchAll()
  const res = parseShopifyResponse(products)

  const paths = []

  res.map((data) => {
    return paths.push({
      params: {
        slug: data.handle,
      },
    })
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // Fetch all the products
  const shopify_product = await shopifyClient.product.fetchAll()
  const product = parseShopifyResponse(shopify_product).find(
    (data) => data.handle === params.slug,
  )

  return {
    props: {
      product,
    },
  }
}
