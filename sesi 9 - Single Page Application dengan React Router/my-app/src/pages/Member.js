import { useParams } from "react-router-dom";

export default function Member() {
  let params = useParams();

  return (
    <div>
      <h3>{params.memberName}</h3>
      <p>This is the detail page of {params.memberName}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, et?{" "}
        {params.memberName}
      </p>
    </div>
  );
}
