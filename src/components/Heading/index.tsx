import React from 'react'

type HeadType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' ;
interface IHeading {
    type: HeadType,
    className?: string
}

const Heading: React.FC<IHeading> = ({children, type, className}) => {
    const Tag = `${type}` as keyof JSX.IntrinsicElements;
    return <Tag className={className}>{children}</Tag>
}

export default Heading