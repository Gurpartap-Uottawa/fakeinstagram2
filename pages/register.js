import styles from "../styles/Home.module.css";

export default function login() {
  return (
    <div className={styles.card}>
      <h1>REGISTER</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <input type="submit" value="Submit" formAction="/login" />
      </form>
    </div>
  );
}
