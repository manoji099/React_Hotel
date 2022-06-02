import "./GeeksButton.css";

interface IProps {
  label: string;
  name: string;
  onClick: () => void;
}

export default function GeeksButton(props: IProps) {
  return (
    <button name={props.name} className='button' onClick={props.onClick}>
      {props.label}
    </button>
  );
}
