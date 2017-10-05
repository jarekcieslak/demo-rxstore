export interface State {
    playlist: Playlist[],
    todos: Todo[]
}

export interface Playlist {
    name: string;
    listened: boolean;
    favourite: boolean;
    artist: string,
    track: string,

}

export interface Todo {
    id: number;
    name: string;
}