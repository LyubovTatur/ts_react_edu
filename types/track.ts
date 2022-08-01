export interface IComment{
    _id:string;
    user:string;
    text:string;

}

export interface ITrack{
    _id: string;
    title:string;
    artist: string;
    lyrics:string;
    listens:number;
    picture:string;
    audio:string;
    comments: IComment[];
}