import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found.</h4>
    );
  }

  // restructure api response to more suitable names.
  const formattedList = drinks.map((item) => {
    const { idDrink, strDrink, strAlcoholic, strDrinkThumb, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      info: strAlcoholic,
      image: strDrinkThumb,
      glass: strGlass,
    };
  });

  return (
    <Wrapper>
      {formattedList.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

export default CocktailList;
