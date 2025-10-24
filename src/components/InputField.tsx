import React, { useRef } from 'react'
import './styles.css';

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent) => void ;
}

const InputField = (props: Props) => {
    const inputRef= useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={ (e)=>{
        props.handleAdd(e)
        inputRef.current?.blur()
        }}>
        <input 
        ref={inputRef}
        type='input' 
        value={props.todo}
        onChange={
            (e)=> props.setTodo(e.target.value)
        }
        placeholder='Enter a task'
        className='input__box'/>
        <button className='input_submit' type='submit'>GO</button>

    </form>
  )
}

export default InputField