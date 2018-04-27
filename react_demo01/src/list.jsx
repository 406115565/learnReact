import React, { Component } from 'react';


const elment = <span>this is span tag</span>

const El = function El(props) {
    return (
        <div>
            <small>函数式组件----{props.num}-----</small>{elment}
        </div>
    )
}
const Pa = function Pa(){
    return (
        <div style={{width: '200px',height: '50px', backgroundColor: 'red'}}></div>
    )
}
const Pb = function Pb(){
    return (
        <div style={{width: '200px',height: '50px', backgroundColor: 'green'}}></div>
    )
}
class List extends Component {
    constructor() {
        super()
        this.state = {
            index: 0
        }
        this.hahah = this.hahah.bind(this)
    }

    componentWillMount() {
    }
    componentDidMount() {
    }
    hahah() {
        this.setState(ps => {
            return { index: ps.index + 1 }
        })
    }
    render() {
        let num = this.state.num
        return (
            <div>
                <El num={this.state.index} />
                
                {num > 10 ? <Pa/> : <Pb/>}
                
                
                {elment}
                <div>
                    <button onClick={this.hahah}>test</button>
                </div>
                <ul>
                    {
                        this.props.listData.map(item => (<li key={item}>{item}</li>))
                    }
                </ul>
            </div>
        )
    }
}

export default List