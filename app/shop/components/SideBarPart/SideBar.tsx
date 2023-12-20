import Category from "./Category";

type Categories = {
    categories: string[],
}

  export default function SideBar({ categories}: Categories) {

  return (
    <div>
      <ul>
      { categories.map((category) => {
        return (<Category key={category} category={category} />);
      })}
      </ul>
    </div>
  );
}

