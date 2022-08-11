import type { NextPage } from "next"
import Image from "next/image"

import Layout from "../components/layout"
import ProductCard from "../components/productCard"
import ProductSmallCard from "../components/productSmallCard"
import SectionTitle from "../components/sectionTitle"
import data from "../contents/portfolio.json"

const getWebSites = () => {
  return data.webSites.map((item) => {
    return (
      <ProductCard
        key={item.name}
        image={item.image}
        title={item.name}
        productType={item.type}
        techStack={item.techStack}
        description={item.description}
        url={item.domain}
      />
    )
  })
}

const getProducts = () => {
  return data.products.map((item) => {
    return (
      <ProductCard
        key={item.name}
        image={item.image}
        title={item.name}
        productType={item.type}
        techStack={item.techStack}
        description={item.description}
        url={item.domain}
      />
    )
  })
}

const getLegacy = () => {
  return data.legacy.map((item) => {
    return (
      <ProductSmallCard
        key={item.name}
        image={item.image}
        title={item.name}
        productType={item.type}
        techStack={item.techStack}
        url={item.domain}
      />
    )
  })
}

const Portfolio: NextPage = () => {
  return (
    <Layout
      title="Portfolio"
      description="Applications and products developped by me"
    >
      <div className="mb-10 mt-8">
        <SectionTitle title="Web site" />
      </div>
      <div className="gap-x-4 gap-y-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {getWebSites()}
      </div>

      <div className="mb-10 mt-20">
        <SectionTitle title="Product" />
      </div>
      <div className="gap-x-4 gap-y-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {getProducts()}
      </div>

      <div className="mb-10 mt-20">
        <SectionTitle title="Legacy" />
      </div>
      <div className="gap-x-4 gap-y-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {getLegacy()}
      </div>
    </Layout>
  )
}

export default Portfolio
