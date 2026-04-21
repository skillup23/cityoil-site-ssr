import Heading from "../components/Heading";
import InfoBanner from "../components/InfoBanner";

function Documents() {
  return (
    <div>
      <InfoBanner style="pt-10 pb-[50px] md:py-20 px-0" idScroll="onas">
        <Heading style="text-center text-white">АЗС СИТИОЙЛ — это</Heading>

        <ul className="mt-[25px] md:mt-[30px] flex items-center justify-between flex-wrap gap-y-6 sm:gap-y-0">
          <h2>Документы тестовая страница</h2>
        </ul>
      </InfoBanner>
    </div>
  );
}

export default Documents;
