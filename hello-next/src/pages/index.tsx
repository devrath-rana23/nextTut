export const Description = () => {
  return (
    <>
      <h1>Description</h1>
      <style jsx global>
        {`
          h1 {
            color: red;
          }
        `}
      </style>
    </>
  );
};

export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      <Description />
    </>
  );
}
