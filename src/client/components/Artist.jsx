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
               dispatch(fetchArtist(artistId));
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
               {artists && (
                    <div>
                         <h2>{artists.name}</h2>
                         {/* <img src={artists.images[0]?.url} alt={artists.name} /> */}
                    </div>
               )}
          </div>
     );
}
