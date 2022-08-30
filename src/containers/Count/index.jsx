import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createIncrementAction} from '../../redux/count_action'
class Count extends Component {

	add = () =>{
		//通知redux加1
		this.props.jiafa(1)
	}

	render() {
		return (
			<div>
				<h2>當前求和為: {this.props.he}</h2>
				<button onClick={this.add}>點我+1</button>
			</div>
		)
	}
}

export default connect(
	state => ({he:state}), //映射狀態
	{jiafa:createIncrementAction} //映射操作狀態的方法
)(Count)
