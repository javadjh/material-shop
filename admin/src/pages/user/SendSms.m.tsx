import { FC, useState } from "react";
import { SpaceStyled } from "../../global-style/global.s";
import { Button, Form, Modal } from "antd";
import { sendSmsService } from "../../service/sms.service";

const SendSmsModal: FC<{
  isOpen: boolean;
  setIsOpen: any;
  userId: string;
}> = ({ userId, isOpen, setIsOpen }) => {
  const [form] = Form.useForm();

  const sendSms = async (formData: any) => {
    await sendSmsService({
      ...formData,
      ...{ userId },
    });
    form.resetFields();
    setIsOpen(false);
  };
  return (
    <Modal
      open={isOpen}
      footer={null}
      onCancel={() => setIsOpen(false)}
      width={"40%"}
    >
      <div dir="rtl">
        <Form layout="vertical" onFinish={sendSms} form={form}>
          <SpaceStyled top={40}>
            <Form.Item name={"message"}>
              <textarea
                placeholder="متن پیام را بنویسید..."
                rows={5}
                className="form-control"
              />
            </Form.Item>
            <button
              className="btn btn-success"
              onClick={(e) => {
                e.preventDefault();
                form.submit();
              }}
            >
              ارسال پیامک
            </button>
          </SpaceStyled>
        </Form>
      </div>
    </Modal>
  );
};
export default SendSmsModal;
