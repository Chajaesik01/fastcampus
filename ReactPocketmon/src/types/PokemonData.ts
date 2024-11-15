export interface PokemonData {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonDataAndUrl[]
}

export interface PokemonDataAndUrl {
    name: string;
    url: string;
}