import React from 'react';

interface EmptyPageProps {
    title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
    return (
        <div>
            <div>This is Empty Page of {title}</div>
        </div>
    );
};

export default EmptyPage;
