import React from 'react';

class StarWars extends React.Component{
    constructor() {
      super()
      this.state = {
        loadedCharacter: false,
        name: null,
        imgURL: null,
        homeworld: null,
        wiki: null,
      }
    }

    getNewCharacter() {
        const randomNumber =Math.round(Math.random() * 88)
        const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNumber}.json`
          fetch(url)
          .then(response => response.json())
          .then(data => {
            this.setState({
                name: data.name,
                homeworld: data.homeworld,
                imgURL: data.image,
                wiki: data.wiki,
                loadedCharacter: true,
               })
        })
    }

    render() {
        return (
         <div>
          {
            this.state.loadedCharacter &&
            <div>
            <img src={this.state.imgURL} alt="A Star Wars Character: " width="300px" />
              <h1>{this.state.name}</h1>
              <p>Learn more about <a href={this.state.wiki}>{this.state.name}</a> or their <a href={this.state.homeworld}>Homeworld</a></p>
            </div>
          }
          <button
          type="button" 
          onClick={() => this.getNewCharacter()}
          className="btn">
          Randomize Character
          </button>
         </div>
        )
    }

}
export default StarWars;