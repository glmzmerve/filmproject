import styles from "./styles.module.css";
const { default: Link } = require("next/link");

function Categories({categories}){
    return (
<div className={styles.categories}>
{categories.map((category) => (
    <Link href={`/${category.id}`} key={category.id} className={styles.category}>
        <div className={styles.name}>{category.name}</div>
        </Link>
))}
</div>
    );
    
}
export default Categories;