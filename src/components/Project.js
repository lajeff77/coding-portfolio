import React from 'react'

const Project = ({name, date, description, link}) => {
  return (
    <div>
        <h3>{name} : {date}</h3>
        <p>{description}</p>
        <p>View <a href={link}>here</a> on GitHub</p>
    </div>
  )
}

export default Project