import { Button, Form, Input, DatePicker } from 'antd'
import React, { useEffect } from 'react'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import type { RangePickerProps } from 'antd/es/date-picker';

dayjs.extend(customParseFormat);

// eslint-disable-next-line arrow-body-style
const disabledDate: RangePickerProps['disabledDate'] = (current) => {
  // Can not select days before today and today
  
  
  return current && current > dayjs().endOf('day');
};

export default function Egitim(props: any) {
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;

  useEffect(()=>{
    props.setActiveStep(2)

  },[props.activeStep])
  
  return (
    <div>
      <Form >
        <Form.Item>Okul
          <Input value={props.n.eğitim.okul} name='okul' onChange={props.handleEğitim}></Input>
        </Form.Item>
        <Form.Item>Bölüm
          <Input value={props.n.eğitim.bölüm} name="bölüm" onChange={props.handleEğitim}></Input>
        </Form.Item>
        <Form.Item>
          <RangePicker disabledDate={disabledDate} size="large" onChange={props.handleTarih}  allowClear={false} />

        </Form.Item><Form.Item>
          <Button onClick={props.handleSubmitE}>Ekle</Button>
        </Form.Item>
      </Form>

    </div>
  )
}
