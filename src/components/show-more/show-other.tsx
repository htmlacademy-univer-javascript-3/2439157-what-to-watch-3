type ShowMoreProps = {
  onClickHandler: () => void;
}

export function ShowOther({onClickHandler}: ShowMoreProps) {
  return (
    <div className="catalog__more">
      <button className='catalog__button' type="button" onClick={onClickHandler}>
        Show more
      </button>
    </div>
  );
}
