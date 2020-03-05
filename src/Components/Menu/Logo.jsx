import React from 'react'
import PropTypes from 'prop-types'

export default class Logo extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return <img
            src="https://image.shutterstock.com/image-vector/initial-letter-jg-logo-icon-260nw-658986976.jpg"
            alt={this.props.altText}
        />

    }
}

Logo.propTypes = {
    altText: PropTypes.string.isRequired,
}