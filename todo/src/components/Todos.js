import React,{useState} from 'react'

export default function Todos(props) {
   const [display,setDisplay]= useState(false)
    const todoClick = (e)=>{
        e.preventDefault()
      props.dispatch({type:'complete',payload:props.item.title})}


    return (
        <div id='todos' className={props.item.completed ? 'completed' : 'notCompleted'} onClick={todoClick }>
            <h3>{props.item.title} </h3>
            {display ? console.log('hello'):null
            }

        </div>

    )
}
