import React from 'react';
import {ITrack} from "../types/track";
import styles from '../styles/id_track_page.module.scss'

interface TrackInfoBlockProps {
    track: ITrack
}

const TrackInfoBlock:React.FC<TrackInfoBlockProps> = ({track}) => {
    return (
        <div style={{padding: 30, display: "flex", flexDirection: 'column'}}>
            <div className={styles.track_info_block}>
                <div>
                    <div className={styles.track_info}>
                        <div>{track.title} - <i>{track.artist}</i></div>

                    </div>
                    <div className={styles.lyrics}>{track.lyrics}</div>
                </div>
                <img className={styles.track_image_info}
                     src={track.picture} width={300}
                     height={300} alt=""/>
            </div>
            <div className={styles.track_info_block} style={{justifyContent: 'center'}}>
                <h1 className={styles.track_info} style={{textAlign: 'center', fontSize: 40}}>Comments</h1>
            </div>
            <div className={styles.comment_section}>
                {track.comments.map(commItem => (
                    <div className={styles.comment} key={commItem._id}><i>{commItem.user}</i>: {commItem.text}</div>
                ))}
            </div>
        </div>
    );
};

export default TrackInfoBlock;