import React, { useEffect } from 'react'
import { useQuery } from 'react-apollo'
import { SliderLayout } from 'vtex.slider-layout'

import './index.css'

import QUERY_VALUE from '../../graphql/schema.graphql'
import TestimonyItem from '../TestimonyItem'

type Document = {
  id: string
  fields: [Field, Field, Field, Field, Field]
}

type Field = {
  key: string
  value: string
}

const Testimony: StorefrontFunctionComponent = () => {
  const testimonyList = useQuery(QUERY_VALUE, {
    variables: {
      acronym: 'LS',
      fields: [
        'clientCity',
        'clientName',
        'clientPhoto',
        'date',
        'testmony',
        'image',
      ],
    },
  })

  useEffect(() => {
    if (testimonyList.data === undefined) {
      testimonyList.refetch()
    } else {
      console.log('Success', testimonyList)
    }
  }, [testimonyList])

  return (
    <div className="hibrido-lucas-souza-testimony-0-x-testimonyContiner">
      <SliderLayout itemsPerPage={{ desktop: 3, tablet: 1, phone: 1 }} infinite>
        {testimonyList.data &&
          testimonyList.data.documents &&
          testimonyList.data.documents.length > 0 &&
          testimonyList.data.documents.map((item: Document, k: number) => (
            <>
              <div key={k}>
                <TestimonyItem document={item} />
              </div>
            </>
          ))}
      </SliderLayout>
    </div>
  )
}

export default Testimony
