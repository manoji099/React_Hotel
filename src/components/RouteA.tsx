import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function RouteA() {
  const params = useParams<{ name: string }>();
  const history = useNavigate();


  return (
    <>
      <div className='App'>{"Hai my name is " + params.name}</div>;
      <button onClick={() => history("/SimpleState")}>Back to simplestate</button>
    </>
  )

  //<div className='App'>The RouteA has been imported</div>
}
