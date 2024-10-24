import ElmentNewArrival from "./ElmentNewArrival";
import firstImg from "../../images/playstation.png";
import secImg from "../../images/11.jpeg";
import thirdImg from "../../images/3headphone.png";
import fourthImg from "../../images/Gucci.png";

function NewArrival() {
  return (
    <div
      id="womens-clothing"
      className="mt-8 gap-8 grid grid-cols-2  px-4 md:px-8"
    >
      <ElmentNewArrival
        name={"Play Station 5"}
        pargraph={"Black and White version of the PS5 coming out on sale."}
        w="911"
        h="1911"
        src={firstImg}
        top={"13"}
      />
    
    <div className="grid gap-16 items-baseline ">
      <ElmentNewArrival
        name={"Women’s Collections"}
        pargraph={"Featured woman collections that give you another vibe."}
        w="711"
        h="911"
        src={secImg}
        top={"38"}
      /> 
      <div className="flex space-x-11">  
        <ElmentNewArrival
          name={"Speakers"}
          pargraph={"Amazon wireless speakers"}
          w="301"
          h="1290"
          src={thirdImg}
        />

        <ElmentNewArrival
          name={"Perfume "}
          pargraph={"GUCCI INTENSE OUD EDP"}
          w="201"
          h="203"
          src={fourthImg}
        />
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
