type Image = {
  src: string
  alt: string
}

type ImageWithTextProps = {
  image: Image
  title: string
  description: string
  rightIcon?: boolean
}

const ImageWithText = ({ image, title, description, rightIcon }: ImageWithTextProps) => {
  let content = 'flex gap-8 p-8'

  rightIcon ? (content += ' flex-row-reverse') : content

  return (
    <section className={content}>
      <img src={image.src} alt={image.alt} className="max-h-40 max-w-40 rounded-full" />
      <div>
        <h3 className="text-purple-300 font-semibold text-2xl">{title}</h3>
        <p className="text-purple-200 mt-3 leading-6">{description}</p>
      </div>
    </section>
  )
}

export default ImageWithText
