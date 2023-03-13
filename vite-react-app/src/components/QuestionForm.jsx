import React, { useState } from "react";
import AnswerBox from "./AnswerBox";

export default class QuestionForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: "",
            clicked: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        var value = this.state.value;
        if (value != "") {
            this.setState({clicked: true});
        }
        else {
            this.setState({clicked: false});
        }
        
        console.log(this.state.clicked)

        const req = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question : value})
        };

        // const res = fetch('http://', req)
        // if (res.ok) {
        //     console.log('sent')
        // }
    };

    render() {
        return (
            <>
                <div className="card w-1/2 bg-primary text-neutral">
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit} className="w-full">
                            <input type="text" placeholder="Ask a question" className="bg-base-100 input input-bordered w-full" value={this.state.value} onChange={this.handleChange} />
                        </form>
                        <p className="mt-3 text-xs">Not sure where to start?</p>
                        <div className="flex gap-4">
                            <button className="normal-case btn btn-secondary btn-xs">What legal risks are there?</button>
                            <button className="normal-case btn btn-secondary btn-xs">Who is this contract for?</button>
                            <button className="normal-case btn btn-secondary btn-xs">When is the start date?</button>
                        </div>
                        {
                            this.state.clicked && <AnswerBox/>
                        }
                    </div>
                </div>
            </>
        );
    }
}
