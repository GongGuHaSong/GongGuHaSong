import React, { Component } from "react";
import uuid from "react-uuid";

class Reply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: "",
            id: 0,
            comments: [],
            isLength: "",
            number: 0,
        };
    }
    handleChange = (e) => {
        this.setState({
            comment: e.target.value,
        });
    };

    handleCommentAdd = () => {
        const { comments, comment } = this.state;
        let newcomment = {
            comment: this.state.comment,
            id: uuid(),
        };
        let addcomments = [...this.state.comments, newcomment];

        this.setState({ comments: addcomments });
        this.setState({ comment: "" });
    };

    handleRemove = (id) => {
        const { comments } = this.state;
        const _comments = comments.filter((key) => key.id !== id);
        console.log(_comments, comments, id);
        this.setState({
            comments: _comments,
        });
    };

    handlePressEnter = (e) => {
        if (e.key === "Enter") {
            this.handleCommentAdd();
        }
    };

    render() {
        const { comment, number } = this.state;
        let isLength = comment.length > 0 ? "active" : "";

        return (
            <div>
                <h1>댓글기능</h1>
                <ul className="addbox">
                    {this.state.comments.map((e) => (
                        <li key={e.id}>
                            {e.comment}
                            <button
                                className="delbutton"
                                onClick={() => this.handleRemove(e.id)}
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>
                <input
                    type="text"
                    name="reply"
                    placeholder="댓글달기"
                    value={comment}
                    onChange={this.handleChange}
                    onKeyPress={this.handlePressEnter}
                ></input>
                <button
                    type="text"
                    onClick={this.handleCommentAdd}
                    className={isLength}
                    value={comment}
                >
                    <span>게시</span>
                </button>
                <h1>{number}</h1>
                <button
                    type="image"
                    name="likebutton"
                    className="likebutton"
                    onClick={() => {
                        this.setState({ number: number + 1 });
                    }}
                >
                    <img
                        src="/images/redheart.png"
                        alt="likebutton"
                        classnName="likebutton"
                    />
                </button>
                <button
                    type="image"
                    name="dislikebutton"
                    className="dislikebutton"
                    onClick={() => {
                        this.setState({ number: number - 1 });
                    }}
                >
                    싫어요
                </button>
            </div>
        );
    }
}

export default Reply;