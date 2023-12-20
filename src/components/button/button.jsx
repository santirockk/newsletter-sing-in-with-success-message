import css from "./Button.module.css";

export const Btn = ({text, onClick}) => {
    return (
      <button 
        className={css.btn} 
        type="submit"
        onClick={onClick}
        >
          {text}
      </button>
    )
}