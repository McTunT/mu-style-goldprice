import React, { FC } from 'react'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import Area from '@components/Examples/Area'

const Examples: FC = () => {
  return (
    <React.Fragment>
      <ParentSize>
        {({ width, height }) => <Area width={width} height={height} />}
      </ParentSize>
    </React.Fragment>
  )
}

export default Examples
