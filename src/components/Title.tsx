type TitleProps = {
  farm: string;
  asset: string;
}

export function Title({ farm, asset }: TitleProps) {
  return (
    <>
      <p><b className="">{farm}</b>:{asset}</p>
    </>
  )
}