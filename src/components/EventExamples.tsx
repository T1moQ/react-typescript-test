
import React, { FC, useRef, useState } from 'react'

const EventExamples: FC = () => {
   const [value, setValue] = useState<string>('')
   const [isDarg, setIsDrag] = useState<boolean>(false)
   const inputRef = useRef<HTMLInputElement>(null)

   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
   }

   const clickHandler = () => {
      console.log(inputRef.current?.value)
      console.log(value)
      setValue('')
   }

   const dragHandler = () => {
      console.log('DRAG ZAZAZ')
   }

   const dragPreventHandler = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault()
      setIsDrag(true)
   }

   const dragLeaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault()
      setIsDrag(false)
   }

   const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault()
      setIsDrag(false)
      console.log('DROP')
   }

   return (
      <div style={{ margin: '15px' }}>
         <input value={value} onChange={changeHandler} type='text' placeholder='Controled' style={{ marginRight: '10px' }} />
         <input ref={inputRef} type='text' placeholder='Uncontroled' style={{ marginRight: '10px' }} />

         <button onClick={clickHandler}>Cick Me!</button>
         <div>
            <div draggable onDrag={dragHandler} style={{ height: '150px', width: '200px', backgroundColor: 'lightslategray', margin: '15px' }}></div>
            <div
               onDrop={dropHandler}
               onDragLeave={dragLeaveHandler}
               onDragOver={dragPreventHandler}
               style={{ height: '150px', width: '200px', backgroundColor: isDarg ? 'lightpink' : 'lightskyblue', margin: '15px' }}></div>
         </div>
      </div>
   )
}

export default EventExamples
