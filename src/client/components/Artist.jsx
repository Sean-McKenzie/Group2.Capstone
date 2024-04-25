import { useDispatch, useSelector } from "react-redux";
// import { fetchArtist, getToken } from "../api";
// import { setToken} from "../store/authSlice";
import { useEffect } from "react";

export default function Artist({ artistId }) {
     const dispatch = useDispatch();
    //  const accessToken = useSelector((state) => state.artists.token)
    //  const artistData = useSelector((state) => state.artists.artist)
     console.log(artistData)

     useEffect(() => {

     }, [dispatch])
      

     return (
          <div>
               {artistData && (
                    <div>
                         <h2>{artistData.name}</h2>
                    </div>
               )}
          </div>
     );
}
