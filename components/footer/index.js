import Link from "next/link";
import styles from "./styles.module.css";
function Footer() {
    return (
        <footer className={styles.footer}>
          Made with ❤️ by&nbsp;
          <Link href="" target="_blank">
            Merve Gülmez
          </Link>
        </footer>
      );
}
export default Footer;