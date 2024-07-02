import { FunctionComponent, useState, useEffect } from "react";
import GridLayout, { Layout } from "react-grid-layout";
import { homeLayoutService } from "../../services/layout.service";
import { createPortal } from "react-dom";
import ModalContent from "../modal";

const HomeGridLayout: FunctionComponent = () => {
  const [layout, setLayout] = useState<Array<Layout>>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  useEffect(() => {
    let homeLayout = homeLayoutService();
    setLayout(homeLayout);
  }, []);


  return (
    <>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        {layout.map((eachLayout) => {
          return (
            <div
              key={eachLayout.i}
              style={{ border: "1px solid red" }}
              onClick={() => setShowModal(true)}
            >
              {eachLayout.i}
            </div>
          );
        })}
      </GridLayout>
      {
        showModal && createPortal(
            <ModalContent onClose={() => setShowModal(false)} />,document.body
        )
      }
    </>
  );
};

export default HomeGridLayout;
