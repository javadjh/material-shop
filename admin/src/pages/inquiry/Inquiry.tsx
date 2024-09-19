import { Button, Col, Row, Typography } from "antd";
import { SpaceStyled } from "../../global-style/global.s";
import InquiriesComponent from "./Inquirys.c";
import { useEffect, useState } from "react";
import { IInquiry } from "../../types/inquiry.type";
import { inquiriesService } from "../../service/inquiry.service";

const Inquiry = () => {
  const [inquiries, setInquiries] = useState<{
    total: number | any;
    inquiries: Array<IInquiry>;
  }>();
  const [paging, setPaging] = useState<{ pageId: number; eachPerPage: number }>(
    {
      pageId: 1,
      eachPerPage: 20,
    }
  );
  useEffect(() => {
    getInquiries();
  }, [paging]);

  const getInquiries = async () => {
    const { data } = await inquiriesService(paging);

    setInquiries(data.data);
  };
  return (
    <>
      <SpaceStyled horizontal={5}>
        <h4>گزارشات</h4>
      </SpaceStyled>
      <InquiriesComponent
        paging={paging}
        inquiries={inquiries}
        setPaging={setPaging}
      />
    </>
  );
};
export default Inquiry;
