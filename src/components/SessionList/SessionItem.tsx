import Button from '../Button/Button'

export type SessionItemProps = {
  id: string
  title: string
  summary: string
  image: string
}

const SessionItem = ({ id, title, image, summary }: SessionItemProps) => {
  return (
    <div className="bg-[#352e41] rounded-lg">
      <img src={image} className="object-cover h-60 w-full rounded-t-lg" />
      <div className=" flex flex-col p-4">
        <h3 className="text-purple-300 text-sm font-semibold">{title}</h3>
        <p className="line-clamp-1 text-purple-100 my-2">{summary}</p>
        <Button to={id} className="self-end">
          learn more
        </Button>
      </div>
    </div>
  )
}

export default SessionItem
