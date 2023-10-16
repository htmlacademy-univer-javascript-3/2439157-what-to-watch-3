type LogoProps = {
  className: string;
  isMain?: boolean;
}
function Logo({ className, isMain }: LogoProps): JSX.Element {
  return (
    <div className="logo">
      <a href={!isMain ? 'main.html' : undefined} className={className} >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
}

export default Logo;
