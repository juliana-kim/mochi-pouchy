import {useParams} from "react-router-dom";

export default function TokenDetailPage() {
  const {ca} = useParams()
  return (
    <div>
      {`Token Detail Page! ${ca}`}
    </div>
  )
}