import React, { Component } from "react"
import PropTypes from "prop-types"

import style from "./style.styl"


export class Footer extends Component {

	constructor(props) {
		super(props)

		this.state = {}
	}



	render() {
		const { children, id } = this.props
		return (
			<div
				className={style.FooterContainer}
				id={id}
			>
				<div className={style.Footer}>
					{children}
				</div>
			</div>
		)
	}
}



Footer.displayName = "Footer"



Footer.propTypes = {
	children: PropTypes.node,
}



export default Footer
