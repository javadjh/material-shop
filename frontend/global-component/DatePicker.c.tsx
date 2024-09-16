import moment from "jalali-moment";
import { DatePicker } from "jalaali-react-date-picker";
import { FC, useState } from "react";
import styled from "styled-components";

const DatePickerComponent: FC<{ children: any; returnDate: any }> = ({
  children,
  returnDate,
}) => {
  const [isShowCalender, setIsShowCalender] = useState<boolean>(false);
  const onSelect = (e: any) => {
    let jalaliDate = moment(e?.toISOString()?.toString())
      .locale("fa")
      .format("YYYY/M/D");
    returnDate(jalaliDate);

    setIsShowCalender(false);
  };
  return (
    <div style={{ position: "relative" }}>
      <span onClick={() => setIsShowCalender(true)}>{children}</span>
      {isShowCalender && (
        <Calender>
          <DatePicker onChange={onSelect} />
        </Calender>
      )}
    </div>
  );
};
export default DatePickerComponent;
const Calender = styled.span`
  position: absolute;
  top: 55px;
  z-index: 10;
  right: 10px;
`;
