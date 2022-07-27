export async function getPokemons(name: string | undefined) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
      (res) => res.json()
    );
  
    return {
      name: name,
      img: res.sprites.front_default,
    };
  }