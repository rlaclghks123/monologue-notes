import CardList from '@/components/CardList';

async function getBook() {
  const BASE_URL = 'http://www.aladin.co.kr/ttb/api';
  const response = await fetch(
    `${BASE_URL}/ItemList.aspx?ttbkey=${process.env.NEXT_PUBLIC_ALADIN_OPEN_API_KEY}&QueryType=Bestseller&MaxResults=25&start=1&SearchTarget=Book&output=JS&Version=20131101`,
  );

  const json = await response.json();
  return json;
}

interface BestSeller {
  itemId: number;
  link: string;
  cover: string;
  title: string;
  author: string;
}

interface BookApi {
  item: BestSeller[];
}
export default async function BestSellerBanner() {
  const { item }: BookApi = await getBook();

  return (
    <div className="w-ful mt-11">
      <p className="mb-2">베스트 셀러</p>
      <CardList item={item} />
    </div>
  );
}
