import React from "react";
import { useNavigate } from "react-router-dom";
import GeeksButton from "./GeeksButton";

export default function SimpleState() {
  const [count, setCount] = React.useState<number>(0);
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate('/RouteA/mano')}>Go to RouteA</button>
      <GeeksButton name='count' label={count.toString()} onClick={() => setCount(count + 1)} />
    </>
  );
}
