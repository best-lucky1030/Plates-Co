import { useEffect, useState } from "react";
import { SelectedType } from "../pages"

export default function CartTable(props: {
    inCartProducts: SelectedType[]
}) {
    const { inCartProducts } = props;
    const [lists, setLists] = useState<any>();
    const groupBy = function (xs: any, key: string) {
        return xs.reduce(function (rv: any, x: any) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };
    useEffect(() => {
        const filtered = groupBy(inCartProducts, "name");
        setLists(filtered);
        // eslint-disable-next-line
    }, [JSON.stringify(inCartProducts)]);

    return (
        <table className="table table-bordered cart-table">
            <tbody>
                {lists && Object.keys(lists).map((item, key) => (
                    <tr key={key}>
                        <td className="fw-bold">{item}</td>
                        <td className="fw-bold text-end">{inCartProducts.filter((products) => products.name === item).length}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
