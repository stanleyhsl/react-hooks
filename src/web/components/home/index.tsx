import React, { Suspense } from "react";
import { useFetch } from "react-hooks-fetch";

const DisplayRemoteData = () => {
  const { error, data } = useFetch(
    "https://apit.weipaitang.com/wechat/v1.0/livemaster/detail?masterId=76"
  );
  if (error) return <span>Error:{error.message}</span>;
  if (!data) return null;
  return <span>服务端数据：{JSON.stringify(data)}</span>;
};

// <span>从服务端取数据中......</span>立即显示，DisplayRemoteData 异步显示
const Home = () => (
  <Suspense fallback={<span>从服务端取数据中......</span>}>
    <DisplayRemoteData />
  </Suspense>
);
export default Home;
