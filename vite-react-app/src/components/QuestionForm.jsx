import React, { useState } from "react";

export default class QuestionForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ""
        }
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        var value = this.state.value;
        console.log(value);

        const req = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question : value})
        };

        const res = fetch('http://', req)
        if (res.ok) {
            console.log('sent')
        }

    };

    render() {
        return (
            <>
                <div className="card w-1/2 bg-primary text-neutral">
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit} className="w-full">
                            <input type="text" placeholder="Ask a question" className="bg-base-100 input input-bordered w-full" value={this.state.value} onChange={this.handleChange.bind(this)} />
                        </form>
                        <p className="text-xs">Not sure where to start?</p>
                    </div>
                </div>
            </>
        );
    }
}