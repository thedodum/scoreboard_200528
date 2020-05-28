import React, {Component} from 'react';
import {addPlayer} from "../redux/actions";
import {useDispatch} from "react-redux";


function AddPlayerForm() {


    /*state = {
        value: ''
    };*/

    /*handleValueChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }*/

    const textInput = React.createRef();

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        /*const form = document.getElementById("form");
        const player = document.getElementById("player");

        console.log(form.checkValidity());
        console.log(player.validity.valid);

        this.props.addPlayer(this.state.value);
        this.setState({
            value: ''
        });*/

        // console.log(this.textInput.current.value);

        dispatch(addPlayer(textInput.current.value));
        e.currentTarget.reset();
    };


    return (
        <form id="form" className="form" onSubmit={handleSubmit}>
            {/*<input type="text" id="player" className="input" placeholder="enter a player's name"
                    value={this.state.value}
                    onChange={this.handleValueChange} required />*/}
            <input type="text" className="input" ref={textInput} placeholder="enter name" />
            <input type="submit" className="input" value="Add Player" />
        </form>
    )

}

export default AddPlayerForm;
