import Image from 'next/image'
import { urlFor } from "../../sanity/lib/image";

const SanityImage = ({ image, alt = 'Image',className = '', ...props }) => {
  if (!image?.asset?._ref) {
    return null
  }

  return (
    <Image
      src={urlFor(image).url()}
      alt={alt}
      width={500}
      height={300}
      className={`w-full h-auto ${className}`}
      {...props}
    />
  )
}

export default SanityImage;
