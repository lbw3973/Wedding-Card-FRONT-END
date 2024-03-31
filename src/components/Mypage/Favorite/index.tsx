import TemplateList from "@/components/Common/TemplateList";
import * as S from "./style";

interface IFavorite {
  title: string;
  img: string;
  tag: string[];
}

const Favorite = ({ data }: { data: IFavorite[] }) => {
  return (
    <S.Container>
      <h2>북마크</h2>
      <ul className="unordered">
        {data.map((item, index) => (
          <TemplateList
            key={index}
            item={{ title: item.title, data: { img: item.img, tag: item.tag }, index: index }}
          />
        ))}
      </ul>
    </S.Container>
  );
};

export default Favorite;
