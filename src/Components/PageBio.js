import '../App.css'
import React from 'react'


class PageBio extends React.Component {
    render() {

        const {bios} = this.props;
        return (
        <div className='bio-section-wrapper'>
        <div className='bio-section'>
            <h1 className='bio-title'>{bios.title}</h1>
            <div className='bio-bio'>
                <p>{bios.bio}</p>
            </div>
        </div>
        </div>
  )
}
}

export default PageBio