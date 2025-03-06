import React from 'react'
import type { CascaderProps } from 'antd'
import { Cascader } from 'antd'

interface Option {
  value: string
  label: string
  children?: Option[]
}


type CustomCascaderProp = CascaderProps & {
  options: Option[]
}

const onChange: CascaderProps<Option>['onChange'] = (value) => {
  console.log(value)
}

const CustomCascader: React.FC<CustomCascaderProp> = ({ options, ...props }) => (
  <Cascader options={options} onChange={onChange} {...props} />
)

export default CustomCascader
