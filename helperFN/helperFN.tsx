import axios, {AxiosResponse} from "axios";

interface ValueExists {
  arg: (arg: string) => boolean | null | string;
}
export function checkPattern(
  str: string
): string {
  // eslint-disable-next-line
  const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[^!@#\$%\^&\*](?=.{7,})/gm.test(
    str
  );
  console.log(isValid);
  return isValid ? str : "";
}

export function userExists(str: string): string {
  return Object.keys(window.localStorage)
    .filter((el) => el === str)
    .join(" ");
}

export function checkIfValueExists(
  str: string
): boolean | null | string {
  let data: {query: string; timeStamp: number}[];
  const queries = window.localStorage.getItem(
    "queries"
  );

  if (queries !== null) {
    data = JSON.parse(queries);
  } else {
    return null;
  }
  const filtered = data.filter(
    (el) => el.query === str
  );
  console.log(filtered, "link1");
  return filtered.length === 0 ? false : true;
}

export function setItems(
  str: string,
  fnError: React.Dispatch<
    React.SetStateAction<string>
  >,
  fnValueExists: (
    arg: string
  ) => boolean | null | string
): {query: string; timeStamp: number}[] {
  let data: {
    query: string;
    timeStamp: number;
  }[] = [];

  const isDouble = fnValueExists(str);
  console.log(isDouble);
  switch (isDouble) {
    case true:
      data = [];
      break;
    case false:
      const queries = window.localStorage.getItem(
        "queries"
      );
      if (queries !== null) {
        data = JSON.parse(queries);
      }
      if (data.length === 10) data.shift();
      data.push({
        query: str,
        timeStamp: Math.floor(Date.now() / 1000),
      });
      window.localStorage.setItem(
        "queries",
        JSON.stringify(data)
      );
      break;
    case null:
      window.localStorage.setItem(
        "queries",
        JSON.stringify([
          {
            query: str,
            timeStamp: Math.floor(
              Date.now() / 1000
            ),
          },
        ])
      );
      data = [
        {
          query: str,
          timeStamp: Math.floor(
            Date.now() / 1000
          ),
        },
      ];
      break;
    default:
      data = [];
  }

  return data;
}

export async function fetchData(
  url: string,
  fetchUrl: string,
  query: string,
  fnSet: React.Dispatch<
    React.SetStateAction<any[]>
  >,
  fnError: React.Dispatch<
    React.SetStateAction<string>
  >,
  fnValueExists: (
    arg: string
  ) => boolean | null | string,
  fnSetLocal: (
    arg: string,
    fnErr: React.Dispatch<
      React.SetStateAction<string>
    >,
    argFn: (
      arg: string
    ) => boolean | null | string
  ) => {query: string; timeStamp: number}[]
) {
  const dataArr = fnSetLocal(
    query,
    fnError,
    fnValueExists
  );
  console.log(dataArr);
  try {
    const {
      data: {data},
    }: AxiosResponse<any> = await axios.post(
      url,
      JSON.stringify({data: query, fetchUrl}),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data);
    fnSet(() => data.results);
  } catch (error) {
    if (error) {
      fnError(() => "Sorry something went wrong");
    }
  }
}
