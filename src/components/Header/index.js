import React, { Component } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import style from "./style.styl"


export class Header extends Component {

	constructor(props) {
		super(props)

		this.state = {}
	}



	render() {
		const { children, className, headerRef, id } = this.props
		return (
			<div
				className={classNames(style.HeaderContainer, className)}
				id={id}
				ref={headerRef}
			>
				{children}
			</div>
		)
	}
}



Header.displayName = "Header"



Header.propTypes = {
	children:  PropTypes.node,
	className: PropTypes.string,
	headerRef: PropTypes.func,
	id:  			 PropTypes.string,
}



export default Header
