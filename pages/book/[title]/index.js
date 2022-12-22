import Head from "next/head";
import React from "react";
import Book from "../../../components/Book";
import data from "../../../data/books.json";

export default function BookDetail({ detailData, resData }) {
  return (
    <div className="flex my-5">
      <Head>
        <title>{detailData.title}</title>
      </Head>
      <div className="m-auto w-11/12 max-w-screen-xl text-center">
        {resData?.map((item, index) => (
          <div key={index}>{item.title}</div>
        ))}
        {detailData ? <Book data={detailData} /> : <span>Error</span>}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { title } = context?.query;
  const detailData = data.find((item) => item.title == title);
  return {
    props: {
      detailData,
    },
  };
}
