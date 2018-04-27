import React from 'react';

class Props extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            val: '',
            msg: 'hello worldddddd'
        }
        this.valChange = this.valChange.bind(this)
    }
    valChange(e) {
        this.setState({ val: e.target.value })
    }
    render() {
        return (
            <div>
                <Child val={this.state.val} leftDiv={<LeftDiv msg={this.state.val}/>} />
                <Input val={this.state.val} valChange={this.valChange} />
            </div>
        )
    }
}


class LeftDiv extends React.Component {
    render() {
        return (
            <div>
                <p>这是一个leftdiv <span>{this.props.msg}</span></p>
            </div>
        )
    }
}

class Child extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <h3>{this.props.leftDiv}显示的值</h3>
                <b>{this.props.val.toUpperCase()}</b>
            </div>)
    }
}

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    valChange(e) {
        this.props.valChange(e)
    }
    render() {
        return (
            <div>
                <input type="text" value={this.props.val} onChange={this.valChange.bind(this)} />
            </div>
        )
    }
}


export default Props