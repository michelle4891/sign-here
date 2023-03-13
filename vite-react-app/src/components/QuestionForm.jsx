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
                        <p className="mt-3 text-xs">Not sure where to start?</p>
                        <div className="flex gap-4">
                            <button className="normal-case btn btn-secondary btn-xs">What legal risks are there?</button>
                            <button className="normal-case btn btn-secondary btn-xs">Who is this contract for?</button>
                            <button className="normal-case btn btn-secondary btn-xs">When is the start date?</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
