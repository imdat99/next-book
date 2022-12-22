import { useEffect, useRef, useState } from "react";
import Books from "../components/Books";
import SearchBooks from "../components/SearchBooks";
import data from "../data/books.json";

const Home = ({ data }) => {
  const [booksData, setBooksData] = useState(data);
  const formRef = useRef(null);
  useEffect(() => {
    formRef.current.onsubmit = (e) => {
      e.preventDefault();
      const searchString = e.target["searchValue"].value.toLowerCase();
      setBooksData((prev) =>
        searchString
          ? prev.filter((item) =>
              item.title.toLowerCase().includes(searchString)
            )
          : data
      );
    };
  }, []);
  return (
    <div className="flex my-5">
      <div className="m-auto w-11/12 max-w-screen-xl">
        <SearchBooks formRef={formRef} />
        <Books data={booksData} />
      </div>
    </div>
  );
};
export function getStaticProps() {
  return {
    props: {
      data,
    },
  };
}
export default Home;
