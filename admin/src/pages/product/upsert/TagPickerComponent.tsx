import { FC, useEffect, useState } from "react";
import { Input, Tag } from "antd";
import * as _ from "lodash";
import { SpaceStyled } from "../../../global-style/global.s";
interface ITagPickerComponent {
  onChange?: any;
  value?: Array<string>;
  placeholder?: string;
}
const TagPickerComponent: FC<ITagPickerComponent> = ({
  onChange,
  value,
  placeholder,
}) => {
  const [tags, setTags] = useState<Array<string>>(value || []);
  const [tagText, setTagText] = useState("");

  const manageTags = (isAdd: boolean, tag?: string) => {
    let tagsCopy = tags;
    if (isAdd) {
      tagsCopy.push(`${tagText}`);
    } else {
      tagsCopy = tagsCopy.filter((item) => item != tag);
    }
    tagsCopy = _.uniq(tagsCopy);
    setTags(tagsCopy);
    onChange(tagsCopy);
    setTagText("");
  };
  useEffect(() => {
    if (value) {
      setTags(value);
    }
  }, [value]);
  return (
    <SpaceStyled>
      <Input
        onKeyDown={(e) => {
          if (e?.nativeEvent?.key === "Enter") {
            e.preventDefault();
            manageTags(true);
          }
        }}
        value={tagText}
        onChange={(e) => {
          setTagText(e.target.value);
        }}
        id={"input"}
        placeholder={
          placeholder ? placeholder : "تگ را وارد کنید سپس Enter را بزنید"
        }
      />
      <SpaceStyled top={10}>
        {tags?.map((item, index) => (
          <Tag
            style={{ cursor: "pointer" }}
            key={index}
            onClick={() => {
              manageTags(false, item);
            }}
          >
            {item}
          </Tag>
        ))}
      </SpaceStyled>
    </SpaceStyled>
  );
};
export default TagPickerComponent;
