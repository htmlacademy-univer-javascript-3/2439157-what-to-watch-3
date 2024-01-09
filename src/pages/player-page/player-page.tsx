import {FilmCardButton} from '../../components/film-card/film-card-button/film-card-button.tsx';
import '../../../style/player-style/player-style.css';
import {ChangeEvent, useEffect, useRef, useState} from 'react';
import cn from 'classnames';
import {useAppSelector} from '../../hooks/hooks-index.ts';
import {getFilm} from '../../store/film-process/film-selectors.ts';
import NotFoundPage from '../not-found-page/not-found-page.tsx';
import {useNavigate} from 'react-router-dom';

export function PlayerPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const film = useAppSelector(getFilm);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const playerElement = videoRef.current;

    if (!playerElement) {
      return;
    }

    if (isPlaying) {
      playerElement.play();
      return;
    }

    playerElement.pause();
  }, [isPlaying]);
  if (!film) {
    return <NotFoundPage/>;
  }
  const handleDurationChange = (evt: ChangeEvent<HTMLVideoElement>) => {
    const currentDuration = Math.round(evt.currentTarget.duration);
    setDuration(currentDuration);
  };
  const handleTimeUpdate = (evt: ChangeEvent<HTMLVideoElement>) => {
    const time = Math.round(evt.currentTarget.currentTime);
    setCurrentTime(time);
  };
  const handleFullScreenClick = () => {
    videoRef.current?.requestFullscreen();
  };
  const timeLeft = (duration - currentTime);
  return (
    <div className="player">
      <video src={film?.videoLink} className="player__video" poster={film?.posterImage} ref={videoRef}
        muted={false} onDurationChange={handleDurationChange} onTimeUpdate={handleTimeUpdate}
      >
      </video>
      <button type="button" className="player__exit" onClick={() => navigate('/')}>Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={videoRef.current?.currentTime}
              max={videoRef.current?.duration}
            >
            </progress>
            <div className="player__toggler">Toggler</div>
          </div>
          <div className="player__time-value">{timeLeft}</div>
        </div>

        <div className="player__controls-row">
          <FilmCardButton height={'19'} width={'19'} xlinkHref={cn({'#play-s': !isPlaying},
            {'#pause': isPlaying})} nameButton={cn({'Play': !isPlaying}, {'Pause': isPlaying})}
          className={'player__play'}
          onClick={() => setIsPlaying ? setIsPlaying(!isPlaying) : undefined}
          />
          <div className="player__name">Transpotting</div>
          <FilmCardButton height={'27'} width={'27'} xlinkHref={'#full-screen'} nameButton={'Full screen'}
            className={'player__full-screen'}
            onClick={handleFullScreenClick}
          />
        </div>
      </div>
    </div>
  );
}
