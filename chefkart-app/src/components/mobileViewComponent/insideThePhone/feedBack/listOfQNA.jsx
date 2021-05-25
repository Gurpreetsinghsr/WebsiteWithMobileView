import SingleQNA from "./singleQNA";
const ListOfQNA = (props) => {
  return (
    <ul className="listOfQues">
      {props.QNAList.map((x) => (
        <li key={x.id}>{<SingleQNA Ques={x.Ques} Ans={x.Ans}></SingleQNA>}</li>
      ))}
    </ul>
  );
};

export default ListOfQNA;
