import React from 'react'

import { Loader } from '../Loader'

const getImageUrl = (selectedName: string) => {
    return `https://dog.ceo/api/breed/${selectedName}/images/random`
}

interface ImageProps {
    selectedName: string,
}

interface ImageState {
    selectedImage: string,
}

export class Image extends React.Component<ImageProps, ImageState> {
    state = {
        selectedImage: ''
    }
    
    getImage = async () => {
        const imageURL = getImageUrl(this.props.selectedName)
        const response = await fetch(imageURL)
        const currentImageObject = await response.json()
        const selectedImage = currentImageObject.message
        this.setState({
            selectedImage: selectedImage
        })
    }

    componentDidUpdate (nextProps: ImageProps) {
        if (nextProps.selectedName !== this.props.selectedName) {        
            this.props.selectedName && (this.getImage())
        }
    }

    componentDidMount () {
        this.getImage()
    }

    render () {
        if (this.state.selectedImage.length < 1) return (
            <Loader labelText="Fetching images..." />
        )
        
        return (
            <img src={this.state.selectedImage} alt={this.props.selectedName} />
        )
    }
}
