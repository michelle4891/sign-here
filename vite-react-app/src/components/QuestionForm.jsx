import React, { useState } from "react";
import Typewriter from 'typewriter-effect';

export default function QuestionForm() {

    const [clicked, setClicked] = useState(false)
    const [value, setValue] = useState("")
    const [ans, setAns] = useState("")

    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setValue(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (value != "") {
            setClicked(true)
        }

        const res = await fetch('http://127.0.0.1:8000/question', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question: value })
        })
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                // `data` is the parsed version of the JSON returned from the above endpoint.
                setAns(data['answer']);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
            });

        //console.log(res.body.JSON())
        
    };
    
    return (
        <>
            <div className="card w-1/2 bg-primary text-neutral">
                <div className="card-body">
                    <form className="w-full" onSubmit={handleSubmit}>
                        <input type="text" name="text" placeholder="Ask a question" className="bg-base-100 input input-bordered w-full" value={value} onChange={handleChange} />
                    </form>
                    <p className="mt-3 text-xs">Not sure where to start?</p>
                    <div className="flex gap-4">
                        <button className="normal-case btn btn-secondary btn-xs">What legal risks are there?</button>
                        <button className="normal-case btn btn-secondary btn-xs">Who is this contract for?</button>
                    </div>
                    {
                        clicked && (
                            <>
                                <Typewriter
                                  options={{
                                    strings: ans,
                                    autoStart: true,
                                    loop: true,
                                  }}
                                />
                            </>
                        )
                    }
                </div>
            </div>
        </>
    );

}
