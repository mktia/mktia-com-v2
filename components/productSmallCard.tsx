import Image from "next/image"

type Props = {
  image: string
  title: string
  productType: string
  techStack: string
  url: string
}

const ProductSmallCard = ({
  image,
  title,
  productType,
  techStack,
  url,
}: Props) => {
  return (
    <div className="flex items-center">
      <a
        href={`https://${url}`}
        className="flex items-center mr-4"
      >
        <Image
          src={`/${image || "no-image.png"}`}
          alt={title}
          height={60}
          width={90}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8+x8AAr8B3gzOjaQAAAAASUVORK5CYII="
        />
      </a>
      <div className="w-52">
        <h3 className="font-bold">{title}</h3>
        <p className="text-neutral-500 text-sm">
          <span className="capitalize">{productType}</span> - {techStack}
        </p>
      </div>
    </div>
  )
}

export default ProductSmallCard
