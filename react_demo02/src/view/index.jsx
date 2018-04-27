import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
class Home extends Component {
    render() {
        return (
            <div id='home'>
                <h3>主页</h3>
                <p>{JSON.stringify(this.props)}</p>
                <Link to='/news'>to news</Link>
                <Route path='/news' component={news} />
            </div>
        )
    }
}


const news = () => (
    <h3>news page</h3>
)

export default Home