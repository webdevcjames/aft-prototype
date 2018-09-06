import React, { Component } from "react"
import PropTypes from "prop-types"

import BoardListItem from "../BoardListItem"
import style from "./style.styl"


export class BoardList extends Component {

	constructor(props) {
		super(props)

		this.state = {}
	}



	render() {
		const { id, items } = this.props
		return (
			<div
				className={style.BoardListContainer}
				id={id}
			>
				<div className={style.BoardListHeader}>
					<h1>Boards</h1>
				</div>
				<div className={style.BoardList}>
					{items && items.map(board => <BoardListItem key={board.id} {...board} />)}
					<div className={style.TestPadding}>I am test padding, only here for scrolling purposes.</div>
				</div>
			</div>
		)
	}
}



BoardList.displayName = "BoardList"



BoardList.propTypes = {
	id:    PropTypes.string,
	items: PropTypes.array,
}



export default BoardList
