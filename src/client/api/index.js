import { createAsyncThunk } from "@reduxjs/toolkit";

export async function getSpotifyToken() {
     const url = "https://accounts.spotify.com/api/token";
     response = await fetch(url, {
          method: "POST",
          headers: {
               Authorization:
                    "Basic " +
                    Buffer.from(client_id + ":" + client_secret).toString(
                         "base64"
                    ),
               "Content-Type": "application/x-www-form-urlencoded",
          },
          body: "grant_type=client_credentials",
          json: true,
     });
     if (response.ok) {
          const jsonResponse = await response.json();
          console.log(jsonResponse);
     } else {
          console.log(response.statusText);
          throw new Error(
               `Request failed! Status code: ${response.status} ${response.statusText}`
          );
     }
}

getSpotifyToken();
