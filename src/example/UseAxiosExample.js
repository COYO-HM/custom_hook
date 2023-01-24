import useAxios from "../hooks/useAxios";

const UseAxiosExample = () => {
  const { loading, error, data, refetch } = useAxios({
    url: "https://yts.am/api/v2/list_movies.json",
  });
  return (
    <div id="example">
      <h1>UseAxios</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <p>{data && data.status}</p>
          <button onClick={refetch}>REFRESH</button>
        </>
      )}
    </div>
  );
};

export default UseAxiosExample;
