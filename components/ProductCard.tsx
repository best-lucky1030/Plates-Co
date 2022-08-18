import Image from "next/image"
import { SelectedType } from "../pages"
import styles from "../styles/Home.module.css"

export default function ProductCard(props: {
    image: string,                  // product preview image
    title: string,                  // product name
    price: number,                  // product price as USD
    code: string,                   // product unique code
    onAddCart: Function             // parameter: {code}
    onRemoveCart: Function,         // parameter: {code}
    inCartProducts: SelectedType[]
}) {
    const { code, image, price, title, onAddCart, inCartProducts, onRemoveCart } = props;

    return (
        <div className={styles.card}>
            <Image
                src={image}
                width={200}
                height={200}
                alt=""
            />
            <div className={styles.name}>
                <h2>{title}</h2>
                <h5>${price}</h5>
            </div>
            <div className={styles.control}>
                <button className="btn btn-primary" onClick={() => onRemoveCart(code)}>
                    -
                </button>
                <p>
                    {inCartProducts.filter((item) => item.code === code).length}
                </p>
                <button className="btn btn-primary" onClick={() => onAddCart(code)}>
                    +
                </button>
            </div>
        </div>
    )
}
