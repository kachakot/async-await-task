import React from 'react'

interface LoaderProps {
    labelText: string
}

export const Loader = ({ labelText }:LoaderProps) => {
    return (
        <div>{labelText}</div>
    )
}
