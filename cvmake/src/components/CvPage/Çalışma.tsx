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

export default function Çalışma(props: any) {
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;
  useEffect(() => {
    props.setActiveStep(1)



  }, [props.activeStep])


  return (
    <div>
      <Form style={{padding:10,backgroundColor:"white",flexDirection:"column",display:"flex",alignContent:"",justifyContent:"space-between"}} >
        <Form.Item style={{margin:10}}>Ünvan
          <Input value={props.n.iş.ünvan} name='ünvan' onChange={props.handleİş}></Input>
        </Form.Item>
        <Form.Item style={{margin:10}}>Kurum
          <Input value={props.n.iş.kurum} name="kurum" onChange={props.handleİş}></Input>
        </Form.Item>
        <Form.Item style={{margin:10}}>
          <RangePicker disabledDate={disabledDate} size="large" onChange={props.handleTarih} format="DD/MM/YYYY " />

        </Form.Item>
        <Form.Item style={{margin:10}} label="Yaptığınız işi açıklayınız">
          <TextArea value={props.n.iş.desc} onChange={props.handleİş} rows={4} />
        </Form.Item>

        <Form.Item style={{margin:10}}>
          <Button onClick={props.handleSubmitI}>Ekle</Button>
        </Form.Item>

      </Form>

    </div>)
}
