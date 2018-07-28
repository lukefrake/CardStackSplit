import React, { Component } from 'react';
import './Cards.css';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';
import Card from '../Card/Card';
import Button from '../Button/Button';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      cardClasses: {
        one: "first",
        two: "second",
        three: "third",
        four: "fourth",
        five: "",
      }
    };
    this.cardSorter = this.cardSorter.bind(this);
  }

  // Handles the sorting of our cards
  // @param {boolean} yes Has our card been chosen as a yes or a no
  // @param {string} behaviour What style of animation do we require
  cardSorter( {yes, behaviour} ) {

    // What's the next card we want
    let updatedCurrentCard = (behaviour === "secondary") ? this.state.currentCard - 1 : this.state.currentCard + 1;

    // More than 4 is bottom of the pack
    // To make this dynamic it would be [card].length or similar
    if ( updatedCurrentCard > 4 ) updatedCurrentCard = 0;

    // Less than 0 is top of the pack
    if ( updatedCurrentCard < 0 ) updatedCurrentCard = 4;

    // What style of animation are we going to have on a standard behaviour
    let animationStyle = (yes) ? " Card-yes" : " Card-no";

    // Let's start looping through our options
    // This isn't the most scalable solution but isn't _awful_ with a finite number of cards
    // Instead could use nth or add the classes based on DOM position
    // This just felt acceptable for this task
    switch( updatedCurrentCard ) {
      case 1:
        this.setState({
          cardClasses: {
            one: (behaviour === "secondary") ? "" : animationStyle,
            two: (behaviour === "secondary") ? "first Card-return" : "first",
            three: "second",
            four: "third",
            five: "fourth"
          }
        });
        break;
      case 2:
        this.setState({
          cardClasses: {
            one: "fourth",
            two: (behaviour === "secondary") ? "" : animationStyle,
            three: (behaviour === "secondary") ? "first Card-return" : "first",
            four: "second",
            five: "third",
          }
        });
        break;
      case 3:
        this.setState({
          cardClasses: {
            one: "third",
            two: "fourth",
            three: (behaviour === "secondary") ? "" : animationStyle,
            four: (behaviour === "secondary") ? "first Card-return" : "first",
            five: "second",
          }
        });
        break;
      case 4:
        this.setState({
          cardClasses: {
            one: "second",
            two: "third",
            three: "fourth",
            four: (behaviour === "secondary") ? "" : animationStyle,
            five: (behaviour === "secondary") ? "first Card-return" : "first",
          }
        });
        break;
      default:
        this.setState({
          cardClasses: {
            one: (behaviour === "secondary") ? "first Card-return" : "first",
            two: "second",
            three: "third",
            four: "fourth",
            five: (behaviour === "secondary") ? "" : animationStyle,
          }
        });
    }

    // Once we've updated our classes we need to store the current card in state
    this.setState({currentCard: updatedCurrentCard});
  }

  render() {
    return (
      <div className="Cards">
        <ul className="Cards_container">
          <Card img={img1} classState={this.state.cardClasses.one}/>
          <Card img={img2} classState={this.state.cardClasses.two}/>
          <Card img={img3} classState={this.state.cardClasses.three}/>
          <Card img={img4} classState={this.state.cardClasses.four}/>
          <Card img={img5} classState={this.state.cardClasses.five}/>
        </ul>
        <div className="Cards_controls">
          <Button className="Button-reject" onClick={() => this.cardSorter({yes: false, behaviour: this.props.behaviour})}>
            &#10006;
          </Button>
          <Button onClick={() => this.cardSorter({yes: true})}>
            &#10004;
          </Button>
        </div>
      </div>
    );
  }
}

export default Cards;