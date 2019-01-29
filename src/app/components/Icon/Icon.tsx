import React from 'react'
import Svg, { G, Text, TSpan } from 'react-native-svg'

const SvgComponent = () => (
  <Svg width={160} height={50} viewBox='0 0 72 18'>
    <G
      id='Page-1'
      stroke='none'
      strokeWidth={1}
      fill='none'
      fillRule='evenodd'
    >
      <G
        id='Artboard'
        transform='translate(0.000000, -7.000000)'
        fill='orange'
      >
        <G id='Group-3' transform='translate(0.000000, 1.000000)'>
          <G id='Group-2'>
            <Text id='photoBook'>
              <TSpan x={0} y={20}>
                {'photoBook'}
              </TSpan>
            </Text>
          </G>
        </G>
      </G>
    </G>
  </Svg>
)

export default SvgComponent
