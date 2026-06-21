//import {api} from "../api/getTracks";
import {useEffect, useState} from "react";
import type {TrackType} from "../types/data";
import {tracksData} from "../store/tracksData";

export function useTrack(id: string | null) {
  const [selectedTrack, setSelected] = useState<TrackType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setSelected(null);
    setError(null);
    setTimeout(() => {
      id && setSelected(tracksData.find(item => item.id === id) || null)
    }, 1000)
  }, [id]);

  // Temporarily disable while API is unavaliable
  //
  // useEffect(() => {
  //   setSelected(null);
  //   id && api.getTrack(id).then(json => {
  //     setSelected(json.data)
  //   })
  //   .catch(err => {
  //     setError(err.message)
  //     console.log('Track data error: ' + err)
  //   });
  // }, [id])

  return {
    track: selectedTrack,
    error
  }
}