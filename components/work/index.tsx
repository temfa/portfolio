import React from "react";
import styles from "./styles.module.css";
import Layout from "@/layouts";
import Title from "../title";
import { group, workSet } from "@/utils/data";
import Image from "next/image";
import Goto from "@/svg-components/goto";

const Work = () => {
  // const [photoIndex, setPhotoIndex] = useState(0);
  // const [isOpen, setIsOpen] = useState(false);

  // console.log(workImage[photoIndex]);

  // useEffect(() => {}, [photoIndex]);
  return (
    <Layout type={true}>
      <div className={styles.workContainer} id="work">
        <div className={styles.workHeader}>
          <Title title="Work" />
          <p>Some of the noteworthy projects I have built:</p>
        </div>
        {workSet?.map((item, index) => {
          return (
            <div className={(index + 1) % 2 == 0 ? styles.workBodys : styles.workBody} key={index}>
              <div className={styles.workImg}>
                <Image src={item.img} alt="Work-img" />
              </div>
              <div className={styles.workText}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <div className={styles.workList}>
                  {group(item.skills, 2)?.map((items: any, index2: number) => {
                    return (
                      <div className={styles.workGroup} key={index2}>
                        {items.map((e: any, index3: number) => {
                          return <Title title={e} key={index3} />;
                        })}
                      </div>
                    );
                  })}
                </div>
                <Goto link={item.link} />
              </div>
            </div>
          );
        })}
      </div>
      {/* {isOpen && (
        <Lightbox
          mainSrc={workImage[photoIndex]}
          nextSrc={workImage[(photoIndex + 1) % workImage.length]}
          prevSrc={workImage[(photoIndex + workImage.length - 1) % workImage.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => {
            if (photoIndex === 0) {
              setPhotoIndex(workImage.length - 1);
            } else {
              setPhotoIndex(photoIndex - 1);
            }
          }}
          onMoveNextRequest={() => {
            if (photoIndex === workImage.length - 1) {
              setPhotoIndex(0);
            } else {
              setPhotoIndex(photoIndex + 1);
            }
          }}
        />
      )} */}
    </Layout>
  );
};

export default Work;
