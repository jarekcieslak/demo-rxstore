export interface State {
    playlist: Playlist[],
    todos: Todo[]
}

export interface Playlist {
    name: string;
}

export interface Todo {
    id: number;
    name: string;
}