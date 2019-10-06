import React from 'react'

interface SelectProps {
    dogsList: string[],
    selectedName: string,
    handleSelectChange: (e:React.FormEvent<HTMLSelectElement>) => void
}

export const Select = ({ dogsList, selectedName, handleSelectChange }:SelectProps) => {
    return (
        <select 
            value={selectedName} 
            onChange={handleSelectChange}
        >
            {dogsList.map(dogName => (
                <option 
                    value={dogName}
                    key={dogName}>
                    {dogName}
                </option>)
            )}
        </select>
    )
}
