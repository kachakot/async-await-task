import React from 'react'
import { Loader } from '../Loader'
import { Select } from '../Select'
import { Image } from '../Image'

const dogListAPI = 'https://dog.ceo/api/breeds/list'

interface DogsState {
    selectedName: string,
    dogsList: string[]
}

export class Dogs extends React.Component<{}, DogsState> {
    state = {
        selectedName: '',
        dogsList: []
    }

    getDogs = async () => {
        const response = await fetch(dogListAPI)
        const dogsList = await response.json()
        this.setState({
            dogsList: dogsList.message,
            selectedName: dogsList.message[0]
        })
    }

    handleSelectChange = (e: React.FormEvent<HTMLSelectElement>) => {
        this.setState({
            selectedName: e.currentTarget.value
        })
    }

    componentDidMount () {
        this.getDogs()
    }
    
    render () {
        if (this.state.dogsList.length < 1) return (
            <Loader labelText="Fetched dogs list..." />
        )
        
        return (
            <>
                <Select 
                    dogsList={this.state.dogsList}
                    handleSelectChange={this.handleSelectChange}
                    selectedName={this.state.selectedName}
                />
                <div>
                    <Image 
                        selectedName={this.state.selectedName}
                    />
                </div>
            </>
        )
    }
}