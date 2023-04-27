import { FaRegTrashAlt } from "react-icons/fa"

const style = {
  li: `flex justify-between bg-slate-200 my-2 p-4 capitalize`,
  liComplete: `flex justify-between bg-slate-400 my-2 p-4 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex item-center`
}

const Todo = ({ todo }) => {
  return (
    <li className={style.li}>
      <div className={style.row}>
        <input type="checkbox" />
        <p className={style.text}>{todo}</p>
      </div>
      <button>
        <FaRegTrashAlt />
      </button>
    </li>
  )
}

export default Todo
