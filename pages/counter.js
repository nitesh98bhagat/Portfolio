import { useSelector } from "react-redux";

export default function counter() {
  const productList = useSelector((state) => state.productList.value);

  //
  return (
    <div className="h-screen">
      {/* {productList} */}
      {productList.map((e) => (
        <p key={e.id}>{e.title} d</p>
      ))}
    </div>
  );
}
