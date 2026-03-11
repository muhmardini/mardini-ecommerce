type Sizes = {
  prop: number
}

const Sizes = ({ prop }: Sizes) => {
  return (
    <div
      style={{
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
      }}
      className="w-10 h-10 bg-secondary flex justify-center items-end"
    >
      <p className="text-background">{prop}</p>
    </div>
  );
};

export default Sizes;
