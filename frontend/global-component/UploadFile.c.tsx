import { FC, useState } from "react";
import axiosConfig from "../service/axiosConfig";
import { uploadAPI } from "../service/APIRoutes";
import { CenterStyled } from "../global-style/global.s";

interface IUploadFileComponent {
  children: any;
  fileHandler: any;
  isPrivate?: any;
  width?: number;
  height?: number;
  isProfile?: boolean;
  accept?: string;
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
  accept,
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
    // message.info("بارگذاری شد");
    fileHandler(data.data, files[0]);
  };
  let inputName = Date.now() + Math.floor(Math.random() * (1000 - 5 + 1) + 5);
  return (
    <>
      {percent && isShowPercent && <CenterStyled>{percent}%</CenterStyled>}

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
        accept={accept}
        id="input-file"
        style={{ visibility: "hidden" }}
        type="file"
        onChange={sendFile}
      />
    </>
  );
};
