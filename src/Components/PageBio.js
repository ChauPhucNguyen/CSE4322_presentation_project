
import '../App.css'
import React from 'react'


class PageBio extends React.Component {
    render() {
        const boldTextStyle = {
            fontWeight: 'bold',
        }
        const {bios} = this.props;
        return (
        <div className='bio-section-wrapper'>
        <div className='bio-section'>
            <h1 className='bio-title'>{bios.title}</h1>
            <p style={boldTextStyle}>{bios.bio}</p>
            <div className='bio-bio'>
                <section>
                    <h2 style={boldTextStyle}>{bios.section1title}</h2>
                    <p>{bios.section1body}</p>
                </section>
                <section>
                    <h2 style={boldTextStyle}>{bios.section2title}</h2>
                    <p>{bios.section2body}</p>
                </section>
            </div>
            {/* <h2 style={boldTextStyle}>{bios.sectionendtitle}</h2>
            <p>{bios.sectionendbody}</p> */}
        </div>
        </div>
  )
}
}

export default PageBio