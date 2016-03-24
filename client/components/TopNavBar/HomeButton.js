function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function HomeButton({ onHomeClick=nullFn }) {
  return (
    <div className='home'>
      <span className="icon">
        <i className="fa fa-home button is-large is-outlined" onClick={onHomeClick} />
      </span>
    </div>
  );
}
