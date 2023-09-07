export default function ImgBlur(props: { urlImg: string }) {
  return (
    <div
      className={`w-full h-full absolute top-0 left-0 z-10 filter blur-[5px] brightness-[0.3]`}
      style={{
        background: `url(${props.urlImg})`,
      }}
    ></div>
  );
}
