import { Audios } from "@/constants/ContentsData";
import * as S from "./style";
import { useEffect, useRef, useState } from "react";
import { PiSpeakerHighDuotone, PiSpeakerXDuotone } from "react-icons/pi";

const Bgm = ({ audioNumber }: { audioNumber: number }) => {
  const [isAudioPlay, setIsAudioPlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  useEffect(() => {
    isAudioPlay ? audioRef.current?.play() : audioRef.current?.pause();
  }, [isAudioPlay]);

  const handleClickAudio = () => {
    setIsAudioPlay(!isAudioPlay);
  };
  if (audioNumber === 0) return null;
  return (
    <S.AudioWrapper>
      <audio src={Audios[audioNumber - 1]} ref={audioRef} />
      <div className="audio-image" onClick={handleClickAudio}>
        {isAudioPlay ? <PiSpeakerHighDuotone size={20} /> : <PiSpeakerXDuotone size={20} />}
      </div>
    </S.AudioWrapper>
  );
};

export default Bgm;
