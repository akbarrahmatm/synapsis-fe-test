import { Avatar, Card } from "antd";
import { FC } from "react";
import { CardItemProps } from "./types";

const { Meta } = Card;

const CardItem: FC<CardItemProps> = ({ title, description, number }) => {
  return (
    <>
      <div>
        <Card
          className="hover:bg-slate-50 hover:cursor-pointer"
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
        >
          <Meta
            avatar={
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
            }
            title={title || "-"}
            description={description || "-"}
          />
        </Card>
      </div>
    </>
  );
};

export default CardItem;
