import { Progress, UploadProps, message } from "antd";
import { FC, useState } from "react";
import axiosConfig from "../service/axiosConfig";
import { uploadAPI } from "../service/APIRoutes";

interface IUploadFileComponent {
  children: any;
  fileHandler: any;
  isPrivate?: any;
  width?: number;
  height?: number;
  isProfile?: boolean;
  isShowPercent?: boolean;
  exs?: Array<string>;
  department?: string;
  onUploadPercent?: (p: number) => void;
}

export const UploadFileComponent: FC<IUploadFileComponent> = ({
  fileHandler,
  children,
  onUploadPercent,
  isShowPercent = true,
}) => {
  const [percent, setPercent] = useState<any>(undefined);
  const sendFile = async (files: any) => {
    if (!files.target.files[0]) return;
    let fileData = files.target.files[0];
    console.log(fileData);
    let file = new FormData();
    file.append("file", fileData);

    const { data } = await axiosConfig.post(`${uploadAPI}`, file, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent: any) => {
        var percentCompleted: any = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        if (onUploadPercent) {
          onUploadPercent(percentCompleted);
        }
        setPercent(percentCompleted);
      },
    });
    setPercent(null);
    message.info("بارگذاری شد");
    fileHandler(data.data, files[0]);
  };
  let inputName = Date.now() + Math.floor(Math.random() * (1000 - 5 + 1) + 5);
  return (
    <>
      {percent && isShowPercent && (
        <Progress
          strokeColor={{
            "0%": "#108ee9",
            "100%": "#87d068",
          }}
          percent={percent}
        />
      )}
      <label id={`fileInput`} htmlFor={`input-file`}></label>
      <div
        onClick={() => {
          let label: any = document.getElementById(`fileInput`);
          label.click();
        }}
      >
        {children}
      </div>

      <input
        id="input-file"
        style={{ visibility: "hidden" }}
        type="file"
        onChange={sendFile}
      />
    </>
  );
};
