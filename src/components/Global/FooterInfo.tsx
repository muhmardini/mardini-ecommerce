type FooterInfoProps = {
    info:string
}
const FooterInfo = ({info}:FooterInfoProps) => {
  return (
    <>
        <p className="text-background text-base">{info}</p>
        <div className="bg-basic w-full max-w-[340px] h-[1px] self-center"></div>
    </>
  )
}

export default FooterInfo