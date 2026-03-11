
type Colors = {
  prop: string
}

const Colors = ({prop}:Colors) => {
  return (
    <div className={"w-6 h-6 border rounded-full flex justify-center items-center " + prop}>
    </div>
  );
};

export default Colors;
