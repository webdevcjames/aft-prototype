import React, { Component as Container } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import range from "lodash/range"

import BoardList from "../../components/BoardList"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

import headerStyle from "../../components/Header/style.styl"
import style from "./style.styl"


export class App extends Container {

	constructor(props) {
		super(props)

		this.state = {
			headerCloseable: props.headerCloseable,
			headerClosed:    props.headerClosed,
		}
	}



	scroll(e) {
		if (this.headerRef) {
			const { headerCloseable } = this.state
			const scrollDist   = e.target.scrollTop
			const headerHeight = this.headerRef.getBoundingClientRect().height
			if (scrollDist > headerHeight) {
				if (!headerCloseable) this.setState({ headerCloseable: true })
			} else {
				if (headerCloseable) this.setState({ headerCloseable: false })
			}
		}
	}



	toggleHeader() {
		if (this.headerRef) {
			const { headerClosed } = this.state
			if (!headerClosed) this.setState({ headerClosed: true })
			else this.setState({ headerClosed: false })
		}
	}



	render() {
		const { headerCloseable, headerClosed } = this.state

		const headerHeight = this.headerRef && this.headerRef.getBoundingClientRect().height

		return (
			<div
				className={style.AppContainer}
				onScroll={e => this.scroll(e)}
			>
				<Header
					className={headerCloseable && headerClosed ? headerStyle.closed : undefined}
					headerRef={el => this.headerRef = el}
				>
					<h1>I am a heading!</h1>
					{headerCloseable && (
						<div
							className={style.AppHeaderToggle}
							onClick={this.toggleHeader.bind(this)}
						>
							<i className={classNames("material-icons", style.MaterialIcons)}>
								{headerClosed ? "keyboard_arrow_down" : "keyboard_arrow_up"}
							</i>
						</div>
					)}
				</Header>

				<div className={style.AppBody}>
					<h1>Get Psyched!</h1>
					<BoardList
						items={[
							{
								id: "hello",
								title: "The Board #1",
								description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam voluptatem earum mollitia adipisci sed, amet nisi aperiam. Consequuntur est impedit quo velit, temporibus a debitis. Ullam hic qui voluptas, fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe fugiat molestiae consequuntur recusandae, ipsa, modi eum quae delectus ullam vero ut sed consequatur incidunt in quaerat, nisi architecto accusantium itaque?",
							},
							{
								id: "hello2",
								title: "The Board #1",
								description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam voluptatem earum mollitia adipisci sed, amet nisi aperiam. Consequuntur est impedit quo velit, temporibus a debitis. Ullam hic qui voluptas, fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe fugiat molestiae consequuntur recusandae, ipsa, modi eum quae delectus ullam vero ut sed consequatur incidunt in quaerat, nisi architecto accusantium itaque?",
							},
						]}
					/>
				</div>
				
				<Footer>
					<p>
						I am a footer!
					</p>
				</Footer>
			</div>
		)
	}
}



App.displayName = "App"



App.propTypes = {
	headerClosed: PropTypes.bool,
}



export default App
