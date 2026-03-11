type FooterInfoProps = {
    info:string
}
const FooterInfo = ({info}:FooterInfoProps) => {
  return (
    <>
        <p className="text-background text-base">{info}</p>
        <div className="bg-basic w-85 h-[0.1px] self-center"></div>
    </>
  )
}

export default FooterInfo