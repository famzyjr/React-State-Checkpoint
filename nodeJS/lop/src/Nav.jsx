import React from 'react'
import {useState} from 'react'
const Nav = (props) => {
 
    const blogs = props.blogs
     const title = props.title

     const [count, setCount] = useState(0)
     const [age, setAge] = useState(19)
     const [name,setName] = useState('ahmed')

    
     
    
     function na(){
        setAge(20) 
        setName('famzy')
       }

       
    
     function add(){
        setCount(prev => prev + 1)

       }

       function sub(){
        setCount(prev => prev - 1)
        
       }

  return (
    <div>
    
    {blogs.map((blog) => (
        <div key={blog.id} >
        <h1>{blog.name}</h1>
          <h1>{title}</h1>
          <button onClick={add}>+</button>
              {count}
             <button onClick={sub}>-</button>
                     <p> {name} {age}</p>
             <button onClick={na}>Click me</button>


        </div>
    ))}

    </div>
  )
}

export default Nav