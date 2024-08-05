export default async function getBestSeller(curPage: number) {
  const BASE_URL = 'http://www.aladin.co.kr/ttb/api';
  const response = await fetch(
    `${BASE_URL}/ItemList.aspx?ttbkey=${process.env.NEXT_PUBLIC_ALADIN_OPEN_API_KEY}&QueryType=Bestseller&MaxResults=5&start=${curPage}&SearchTarget=Book&output=JS&Version=20131101`,
  );

  const json = await response.json();
  return json;
}
