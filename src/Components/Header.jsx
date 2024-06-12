import React from 'react'

const Header = (props) => {
    const tasks =props.tasks
  return (
    <div><div className="mt-[7%] w-[70%] h-[30vh] ml-[15%] border rounded-3xl flex justify-around items-center">
    <div className=" text-green-300">
        <h1 className="text-3xl font-bold">LETS TODO</h1>
        <p>Keeps doing things</p>
    </div>
    <div className="text-3xl font-extrabold flex justify-center items-center w-[10vmax] h-[10vmax] rounded-full bg-green-600">
        {tasks.filter((t) => t.completed === true).length}/
        {tasks.length}
    </div>
</div></div>
  )
}

export default Header