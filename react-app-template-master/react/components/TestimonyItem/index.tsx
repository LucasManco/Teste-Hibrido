import React from 'react'
import './index.css'

interface IMyProps {
  document: Document
}
type Document = {
  id: string
  fields: [Field, Field, Field, Field, Field]
}

type Field = {
  key: string
  value: string
}
// TODO: erro no css-handles classes criadas manualmente

const TestimonyItem = (props: IMyProps) => {
  const { fields } = props.document
  const date = new Date(fields[2].value)

  return (
    <>
      <div className="hibrido-lucas-souza-testimony-0-x-testimonyItemContainer">
        <img
          className="hibrido-lucas-souza-testimony-0-x-testimonyImage"
          src={fields[4].value}
          alt={fields[1].value}
        />
        <div>
          <p className="hibrido-lucas-souza-testimony-0-x-testimony">
            {fields[3].value}
          </p>
        </div>
        <p className="hibrido-lucas-souza-testimony-0-x-testimonyClientName">
          {fields[1].value}
        </p>
        <p className="hibrido-lucas-souza-testimony-0-x-testimonyClientCity">
          {fields[0].value}
        </p>
        <p className="hibrido-lucas-souza-testimony-0-x-testimonyDate">
          {date.getDate()}/{date.toLocaleString('pt-br', { month: 'short' })}/
          {date.getFullYear()}
        </p>
      </div>
    </>
  )
}

export default TestimonyItem
