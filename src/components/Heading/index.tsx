import React from 'react'
import cn from 'classnames'
import s from './Heading.module.scss'

type HeadType = 'xl' | 'l' | 'm' | 's' | 'xs';
interface IHeadingProps {
    size?: HeadType,
    className?: string
}

interface IHeadingTypes {
    [n: string]: number
}

const HeadingTypes: IHeadingTypes = {
    xl: 1,
    l: 2,
    m: 3,
    s: 4,
    xs: 5,
    xxs: 6,
    p: 6
}

const Heading: React.FC<IHeadingProps> = ({children, size = 'xl', className}) => {
    const HeadingClasses = {
        className: cn(s[size], className)}
    return React.createElement(`h${HeadingTypes[size]}`, HeadingClasses, children)
}

export default Heading