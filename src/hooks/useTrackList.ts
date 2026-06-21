//import {api} from "../api/getTracks";
import {useEffect, useState} from "react";
import type {TrackType} from "../types/data";
import {tracksData} from "../store/tracksData";

export function useTrackList() {
  const [tracks, setTracks] = useState<TrackType[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setTracks(tracksData);
      setError(null);
    }, 2000)
  }, []);

  // Temporary disable while API is unavaliable
  //
  // useEffect(() => {
  //   api.getTracks().then(json => {
  //     setTracks(json.data)
  //   })
  //     .catch(err => {
  //       setError(err.message)
  //       console.log('Tracks data error: ' + err)
  //     });
  // }, []);

  return {
    tracks,
    error
  }
}