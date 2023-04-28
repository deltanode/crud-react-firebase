import { FaRegTrashAlt } from "react-icons/fa"

const style = {
  li: `flex justify-between bg-slate-200 my-2 p-4 capitalize`,
  liComplete: `flex justify-between bg-slate-400 my-2 p-4 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex item-center`
}

const Todo = ({ todoText, isCompleted }) => {
  return (
    <li className={isCompleted ? style.liComplete : style.li}>
      <div className={style.row}>
        <input type="checkbox" checked={isCompleted ? true : false} />
        <p className={isCompleted ? style.textComplete : style.text}>{todoText}</p>
      </div>
      <button className={style.button}>
        <FaRegTrashAlt />
      </button>
    </li>
  )
}

export default Todo
