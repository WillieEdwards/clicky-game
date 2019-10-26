import React, { Component } from "react";
import Card from "./components/Card/Card";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import card from "./characters.json";
import "./App.css";

let currentScore = 0;
let highScore = 0;
let clickAlert = "Click an image to increase your score, but don't click the same image twice.";

class App extends Component {

  // Setting this.state.card to the card json array
  state = {
    card,
    currentScore,
    highScore,
    clickAlert
  };

  setClicked = id => {

    // Make a copy of the state card array to work with
    const card = this.state.card;

    // Filter for the clicked match
    const clickedMatch = card.filter(match => match.id === id);

    // If an image has already been clicked, render losing alert
    if (clickedMatch[0].clicked) {

      console.log("Current Score: " + currentScore);
      console.log("Highest Score: " + highScore);

      currentScore = 0;
      clickAlert = "All the courage in the world cannot alter fact. You lose!"

      for (let i = 0; i < card.length; i++) {
        card[i].clicked = false;
      }

      this.setState({ clickAlert });
      this.setState({ currentScore });
      this.setState({ card });

      // If an image hasn't been clicked, and high score hasn't been reached
    } else if (currentScore < 11) {

      // Set the value to true
      clickedMatch[0].clicked = true;

      // Add to the current score counter
      currentScore++;

      clickAlert = "You know what's real. Choose another image.";

      if (currentScore > highScore) {
        highScore = currentScore;
        this.setState({ highScore });
      }

      // Shuffle the array to be rendered in a random order
      card.sort(function (a, b) { return 0.5 - Math.random() });

      // Set this.state.card equal to the new card array
      this.setState({ card });
      this.setState({ currentScore });
      this.setState({ clickAlert });
    } else {

      // Set its value to true
      clickedMatch[0].clicked = true;

      // restart the guess counter
      currentScore = 0;

      // If high score reaches 12, render winning alert
      clickAlert = "All the best memories are yours. You Win!";
      highScore = 12;
      this.setState({ highScore });

      for (let i = 0; i < card.length; i++) {
        card[i].clicked = false;
      }

      // Shuffle the array to be rendered in a random order
      card.sort(function (a, b) { return 0.5 - Math.random() });

      // Set this.state.card equal to the new card array
      this.setState({ card });
      this.setState({ currentScore });
      this.setState({ clickAlert });

    }
  };

  render() {
    return (
      <Wrapper>

        <Header>
          Memory Lab  
          <h2>
            Current Score: {this.state.currentScore}
            <br />
            Highest Score: {this.state.highScore}
          </h2>
          
          <h3>
            {this.state.clickAlert}
          </h3>
        </Header>

            {this.state.card.map(match => (
              <Card
                setClicked={this.setClicked}
                id={match.id}
                key={match.id}
                image={match.image}
              />
            ))}
            
      </Wrapper>
    );
  }
}

export default App;