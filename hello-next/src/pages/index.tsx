import styles from "../styles/main.module.scss";
export const Description = () => {
  return (
    <>
      <h1>Description</h1>
      <style jsx>
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
      <h1 className={styles.hello_text}>Hello <span>green</span></h1>
      <Description />
    </>
  );
}
