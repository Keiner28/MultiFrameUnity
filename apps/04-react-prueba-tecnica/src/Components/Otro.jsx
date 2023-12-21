import { useCatImage } from '../Hooks/useCatImage'

export function Otro() {
  const { imageUrl } = useCatImage({ fact: 'cat' })

  return <>{imageUrl && <img src={imageUrl} alt="" />}</>
}
