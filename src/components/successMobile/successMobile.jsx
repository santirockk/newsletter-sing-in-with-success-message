import { Btn } from "../button/button";
import css from "./SuccessMobile.module.css";


const Container = ({children}) => {
    return (
        <div className={css.success__container} >{children}</div>
    )
}

const Text = ({email}) => {
    return (
        <>
          <h1 className={css.success__h1}>Thanks for subscribing!</h1>
          <p className={css.success__p}>
            A confirmation email has been sent to
            <b> {email}</b>.
            Please open it and click the button inside to confirm your subscription.
        </p>
        </>
   
    )
}


export const SuccessMobile = ({onClick, email}) => {
    return (
        <Container>
            <img 
              className={css.success__image}
              src='images/icon-success.svg'
            />
            <Text email={email}/>
            <Btn text={"Dismiss message"} onClick={onClick}/>
        </Container>
    )
}