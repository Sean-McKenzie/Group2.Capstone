import { useDispatch, useSelector } from "react-redux";
import { searchArtist, fetchArtist } from "../api";
// import { setArtists} from "../store/authSlice";
import { useEffect } from "react";

export default function Artist({ artistId }) {
    //  const dispatch = useDispatch();
    // // const artists = useSelector((state) => state.artists.artists)
    //  const { artists, error, loading} = useSelector((state) => state.artists)

     const dispatch = useDispatch();
     const artists = useSelector((state) => state.artists.artists);
     const status = useSelector((state) => state.artists.status);

     useEffect(() => {
          if (status === "idle") {
               dispatch(searchArtist("Skrillex"));
               
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
            c
               {artists && artists.map((artist) => (
                
                    <div key={artist.id}>
                         <h2>{artist.name}</h2>
                         <img src={artist.images[0]?.url} alt={artist.name} />
                    </div>
               ))}
          </div>
     );
}
