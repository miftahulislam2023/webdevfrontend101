import { Fragment } from "react/jsx-runtime";
import { v4 as uuidv4 } from "uuid";

const ListRender = () => {
  const mangoList = [
    {
      name: "Fojli",
      id: 1,
    },
    {
      name: "Aam Rupali",
      id: 2,
    },
    {
      name: "Himsagor",
      id: 3,
    },
    {
      name: "Gopalvog",
      id: 4,
    },
    {
      name: "Langra",
      id: 5,
    },
  ];

  return (
    <Fragment>
      {mangoList.map((mango) => (
        <div key={uuidv4()} className="text-red-800">
          {`I love ${mango.name}`}
        </div>
      ))}
    </Fragment>
  );
};

export default ListRender;
