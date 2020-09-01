import React, {useEffect, useState} from "react";
import styles from './AudioPlayer.module.css'
import convertToMMSS from "../../../utils/timeConverter";

const AudioPlayer: React.FC<{ audioSrc: string, stopAudio: boolean }> = ({audioSrc, stopAudio}) => {
  const [audio] = useState(new Audio(audioSrc));
  const [audioPlaying, setAudioState] = useState<boolean>(false);
  const [audioDuration, setAudioDuration] = useState<number>(0);
  const [currentAudioTime, setCurrentAudioTime] = useState<number>(0);
  const startOrStopAudio = () => {
    if (audioPlaying) {
      audio.pause();
      setAudioState(false);
    } else {
      audio.play().then();
      setAudioState(true);
    }
  }
  useEffect(()=> {
    if (stopAudio) {
      audio.currentTime = 0
      audio.pause();
      setAudioState(false);
    }
  }, [stopAudio])

  if (audio) {
    audio.onloadedmetadata = () => {
      setAudioDuration((audio.duration));
      audio.ontimeupdate = () => setCurrentAudioTime(audio.currentTime);
    };
  }

  const progress = (Math.round(Number(currentAudioTime) / Number(audioDuration)*100));

  return<>
    <div className={styles.PlayerWrapper}>
      <div className={styles.PlayButton} onClick={startOrStopAudio}>
        <span className={styles.CurrentAudioTime}>{convertToMMSS(currentAudioTime)}</span>
        {!audioPlaying && <svg className={styles.PlayButtonIcon} viewBox="-200 0 1200 1000">
          <path fill="#00bc8c"
                d="M96.51 11.97c-31.23 8.05-53.26 32.76-63.42 71.27-3.45 12.84-3.64 29.7-3.64 416.71s.19 403.87 3.64 416.71c16.09 60.74 61.69 86.03 120.9 67.25 9-2.87 53.65-25.1 116.49-58.24 56.14-29.51 221.29-116.3 367.28-192.93 145.99-76.64 271.29-143.31 278.38-148.1 39.28-25.68 59.59-63.04 53.26-97.52-4.79-26.63-24.33-53.07-52.88-71.65C892 399.37 172.58 22.32 154.95 16.38c-18.97-6.33-43.3-8.24-58.44-4.41z">
          </path>
        </svg>}
        {audioPlaying && <svg className={styles.PauseButtonIcon} viewBox="0 0 47.607 47.607">
          <path fill="#00bc8c" d="M17.991 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345zM42.877 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345z">
          </path>
        </svg>}
      </div>
      <div className={styles.PlayBarWrapper}>
        <span className={styles.ProgressPoint} style={{left: (progress-1) + '%'}}/>
        <div className={styles.PlayBar}/>
      </div>
      <span className={styles.AudioDuration}>{convertToMMSS(audioDuration)}</span>

    </div>
  </>


}

export default AudioPlayer;
