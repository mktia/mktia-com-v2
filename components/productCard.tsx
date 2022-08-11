import Image from "next/image"

type Props = {
  image: string
  title: string
  productType: string
  techStack: string
  description: string
  url: string
}

const ProductCard = ({
  image,
  title,
  productType,
  techStack,
  description,
  url,
}: Props) => {
  return (
    <div>
      <a href={`https://${url}`}>
        <Image
          src={`/${image || "no-image.png"}`}
          height={200}
          width={300}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8+x8AAr8B3gzOjaQAAAAASUVORK5CYII="
        />
      </a>
      <div className="mt-2 w-72">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="mb-2 text-neutral-500 text-sm">
          <span className="capitalize">{productType}</span> - {techStack}
        </p>
        <p>{description}</p>
        <p className="mt-4 text-neutral-500 text-sm">
          <a href={`https://${url}`}>{url}</a>
        </p>
      </div>
    </div>
  )
}

export default ProductCard
