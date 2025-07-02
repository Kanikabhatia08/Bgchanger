import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor: color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='bg-white px-2 py-1 rounded-full shadow-lg gap-3 flex justify-center'>
            <button onClick={()=> setColor("red")} className='bg-red-600 px-4 py-1 text-white rounded-full '>Red</button>
            <button onClick={()=> setColor("green")} className='bg-green-600 px-4 py-1 text-white rounded-full '>Green</button>
            <button onClick={()=> setColor("blue")} className='bg-blue-600 px-4 py-1 text-white rounded-full '>Blue</button>
            <button onClick={()=> setColor("yellow")} className='bg-yellow-400 px-4 py-1 text-white rounded-full '>Yellow</button>
            <button onClick={()=> setColor("black")} className='bg-black px-4 py-1 text-white rounded-full '>BLack</button>
            <button onClick={()=> setColor("white")} className='bg-white px-4 py-1 text-black rounded-full '>White</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
