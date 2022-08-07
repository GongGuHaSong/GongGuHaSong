import React from 'react';
import SingleTweet from './SingleTweet'
import styles from '../css/Product.module.css'

class Twittler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: [
                {
                    uuid: 1,
                    writer: "김눈송",
                    date: "2020-10-10",
                    content: "안녕하세요"
                },
                {
                    uuid: 2,
                    writer: "박총대",
                    date: "2020-10-12",
                    content: "안녕안녕"
                }
            ]
        }
        this.addTweet = this.addTweet.bind(this);
    }
    addTweet() {
        let value = document.querySelector("#new-tweet-content").value;
        this.setState({
            tweets: [...this.state.tweets, {
                uuid: this.state.tweets.length + 1,
                writer: '김눈송',
                date: new Date().toISOString().slice(0, 10),
                content: value
            }]
        })
    }
    render() {
        return (
            <div id="root">
                <div>
                    <div>작성자: 김눈송</div>
                    <div id="writing-area">
                        <textarea rows="7" cols="85" id="new-tweet-content"></textarea>&emsp;
                        <button id="submit-new-tweet" onClick={this.addTweet} className={styles.comment}>댓글<br />작성하기</button>

                    </div>
                    <ul id="tweets">
                        {
                            this.state.tweets.map(tweet => {
                                return <SingleTweet key={tweet.uuid} tweet={tweet} />
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Twittler;