import * as React from "react";

/**
 * This app has two class components. Your job is
 * to add the necessary props and state interfaces and
 * annotate the two components. You'll know you are done
 * when the red squiggles are gone.
 *
 * There is also an `unknown` type used in the `getPokemon`
 * method - you should replace that with an interface.
 *
 * You might be tempted to create an interface that perfectly
 * models the results of the API call - don't. It's best
 * to only model the properties which are actually used in
 * the component.
 *
 * Don't change the implementation of the components;
 * only add type annotations.
 */

class Pokemon extends React.Component {
  state = { pokemon: null };

  getPokemon = async () => {
    const response = await fetch(this.props.url);
    const data: unknown = await response.json();
    this.setState({ pokemon: data });
  };
  componentDidMount() {
    this.getPokemon();
  }
  render() {
    if (!this.state.pokemon) return null;
    return (
      <li className="pokemon">
        <img
          alt={this.state.pokemon.name}
          src={this.state.pokemon.sprites.other.dream_world.front_default}
        />
        <strong>{this.state.pokemon.name}</strong>
      </li>
    );
  }
}

const PAGE_SIZE = 50;
export default class PokeList extends React.Component {
  state = { page_num: 0, pokemon_list: null };
  getPokemonList = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${PAGE_SIZE}&offset=${
        this.state.page_num * PAGE_SIZE
      }`
    );
    const data: unknown = await response.json();
    this.setState({ pokemon_list: data.results });
  };
  componentDidMount() {
    this.getPokemonList();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.page_num !== this.state.page_num) {
      this.setState({ pokemon_list: null });
      this.getPokemonList();
    }
  }
  render() {
    return (
      <div>
        {this.state.page_num >= 1 && (
          <button
            onClick={() => {
              this.setState((state) => ({ page_num: state.page_num - 1 }));
            }}
          >
            Prev
          </button>
        )}
        <button
          onClick={() => {
            this.setState((state) => ({ page_num: state.page_num + 1 }));
          }}
        >
          Next
        </button>
        <ul>
          {this.state.pokemon_list?.map((pokemon) => (
            <Pokemon key={pokemon.url} url={pokemon.url} />
          ))}
        </ul>
      </div>
    );
  }
}
