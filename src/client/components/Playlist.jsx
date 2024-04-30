import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylist } from "../api";
import { useEffect } from "react";

export default function Playlist({playlistId}) {
    const dispatch = useDispatch();
    const playlist = useSelector((state) => state.playlist.playlist);
    const status = useSelector((state) => state.playlist.status);

    useEffect(() => {
        console.log(status)
            if(status === "idle") {
              dispatch(fetchPlaylist(playlistId));
            }
         
    }, [dispatch, status]);

    if (status === "loading") {
         return <div>Loading...</div>;
    }

    if (status === "failed") {
         return <div>Error loading artists</div>;
    }

    return (
         <div>
              {playlist && (
                   
                        <div>{playlist.tracks?.items.map((item) => 
                            
                            <h2 key={item.track.id}>{item.track.name}
                                <h4 key={item.track.artists.id}>{item.track.artist?.map((art) =>
                                    <h4>{art.name}</h4>
                                )}</h4>
                            </h2>

                        )}</div>
                        
                   
              )}
         </div>
    );

}