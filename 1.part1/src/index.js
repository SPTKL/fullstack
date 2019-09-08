import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }
  
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }

const Header = (course) =>{
    return (
        <div>
            <h1>
                {course.course}
            </h1>
        </div>
    )
}

const Content = (content) => {
  return (
        <div>
            <Part part={content.parts[0]}/>
            <Part part={content.parts[1]}/>
            <Part part={content.parts[2]}/>
        </div>
    )
}

const Part = (part) => {
    return (
        <div>
            <p>
              {part.part.name} {part.part.exercises}
            </p>
        </div>
    )
}

const Total = (total) => {
    return (
        <div>
            <p>
            Number of exercises {total.parts[0].exercises + total.parts[1].exercises + total.parts[2].exercises}
            </p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))