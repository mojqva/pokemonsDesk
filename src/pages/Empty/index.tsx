import React from 'react'
import Header from '../../components/Header'

interface EmptyPageProps {
    title?: string
}

const EmptyPage: React.FC<EmptyPageProps>= ({title}) => {
    return (
        <div>
            <Header />
            <div>
                This is Empty Page of {title}
            </div>
        </div>
        
    )
}

export default EmptyPage