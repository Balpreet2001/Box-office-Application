

export default function AppTitle (props)  {
     const {title="Box Ofiice" , subtitle = "Are you looking for a movie or actor?"} = props
  return (
    <div>
      <h1>{title}</h1>
      <p1>{subtitle}</p1>
    </div>
  );
}
