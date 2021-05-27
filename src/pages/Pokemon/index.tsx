import React from 'react'

export interface IProps {
    id: number | string
}

const Pokemon: React.FC<IProps> = ({id}) => {
    return (
        <div>This page is equil to Pokemon #{id}</div>
    )
}

export default Pokemon