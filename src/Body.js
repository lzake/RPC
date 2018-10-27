import React from 'react';
import {
    Alert,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';

let choice = ["rock", "paper", "scissors"]

export default class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            text: null,
            userChoice: null,
            computerChoice: null,
            winner: false,
            score: 0
        };

        this.toggle = this
            .toggle
            .bind(this);
    }

    fight = input => {
        this.state.computerChoice = choice[Math.floor(Math.random() * choice.length)]
        if (input == this.state.computerChoice) {
            this.state.winner = false
            this.state.text = "You tie"
        } else if (choice.indexOf(this.state.computerChoice) > 0 && choice.indexOf(input) > choice.indexOf(this.state.computerChoice)) {
            this.state.winner = true
            this.state.text = "You win"
            this.state.score++
        } else {
            this.state.winner = false
            this.state.text = "You lose"
        }
    }

    onClick = (input) => {
        this.toggle();
        this.state.userChoice = input
        this.fight(input)
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        return (
            <div>
                <Alert color="primary">
                    Let's play a game! Chose your weapon, weary Traveler!
                </Alert><br/>
                <Button color="secondary" onClick={() => this.onClick("rock")}>Rock</Button>{' '}
                <Button color="success" onClick={() => this.onClick("paper")}>Paper</Button>{' '}
                <Button color="danger" onClick={() => this.onClick("scissors")}>Scissors</Button>{' '}
                <br/><br/>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}>
                    <ModalBody>
                        <p>
                            <i>You chose -
                            </i>
                            {this.state.userChoice}</p>
                        <p>
                            <i>Computer chose -
                            </i>
                            {this.state.computerChoice}</p>

                        {this.state.winner
                            ? <strong>congrats!</strong>
                            : null}
                        <br/>
                        <p>{this.state.text}</p>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Try Again</Button>
                    </ModalFooter>
                </Modal>
                <Card>
                    <CardBody>
                        <CardTitle>Your score</CardTitle>
                        <CardText>{this.state.score}</CardText>
                    </CardBody>
                </Card>

            </div>
        );
    }
}