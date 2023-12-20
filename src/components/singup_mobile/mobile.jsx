import { Btn } from "../button/button";
import css from "./Mobile.module.css";


const Container = ({children}) => {
    return (
      <div className={css.container}>{children}</div>
    )
  }
  
  const Image = () => {
    return (
        <img className={css.img}
          src='images/illustration-sign-up-mobile.svg' 
          alt='deco'
        />
      )
  }
  
  const Text = () => {
    return (
      <div className={css.text}>
        <h1 className={css.text__h1}>Stay updated!</h1>
        <p className={css.text__p}>Join 60,000+ product managers
        receiving monthly updates on:</p>
      </div>
    )
  }
  
  // List Component ------
  
  const listMessages = [
    {
      msn: "Product discovery and building what matters",
      id: 1
    },
    {
      msn: "Measuring to ensure updates are a success",
      id: 2
    },
    {
      msn: "And much more!",
      id: 3
    }  
  ]
  
  const ListItem = ({ text, id }) => {
    return (
      <li className={css.list__li} key={id}>
        <img className={css.list__svg} src='images/icon-list.svg' alt='✓'/>
        <p className={css.list__p}>{text}</p>
      </li>
    )
  }
  
  const List = ( {listMessages} ) => {
    return (
      <ul className={css.list}>
        {listMessages.map(msn => <ListItem key={Math.random()} text={msn.msn}/>)
        }
      </ul>
    )
  }
  
  // Form Component ------
  
  const Form = ( {onSubmit, error, inputVariant} ) => {
    return (
      <form 
        noValidate 
        className={css.form} 
        onSubmit={onSubmit} 
      >
        <label>
          <div className={css.form__texts}>
            <p className={css.form__p}>Email address</p>
            <p className={css.form__error}>{error}</p>
          </div> 
          <input 
            className={`${css.form__input} ${inputVariant}`}
            type='email' 
            name='email' 
            placeholder='email@company.com' 
            required
          />
        </label>
        <Btn text={'Subscribe to monthly newsletter'}/>
      </form>
    )
  }

export const SignUpMobile = ({onSubmit, error, inputVariant}) => {
    return(
        <Container>
         <Image />
         <Text />
         <List listMessages={listMessages}/>
         <Form onSubmit={onSubmit} error={error} inputVariant={inputVariant}/>
       </Container>
    )
  }

