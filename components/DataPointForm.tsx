import { Box, TextInput, Group, Button } from "@mantine/core";
import { useForm } from "@mantine/form";

import DataPointFormValues from "../types/DataPointFormValues";

type Props = {
  handleFormSubmit: (values: DataPointFormValues) => void;
};

const DataPointForm = ({ handleFormSubmit }: Props) => {
  const form = useForm({
    initialValues: {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
    },
    validate: {
      a: (value) => ((value) == 1 || (value) == 0 ? null : 'ระบุได้เฉพาะเลข 1 หรือ 0'),
      b: (value) => ((value) >= 0 && value <= 5 ? null : 'ระบุได้เฉพาะเลข 0 ถึง 5'),
      c: (value) => ((value) >= 0 && value <= 5 ? null : 'ระบุได้เฉพาะเลข 0 ถึง 5'),
      d: (value) => ((value) >= 0 && value <= 5 ? null : 'ระบุได้เฉพาะเลข 0 ถึง 5'),
      e: (value) => ((value) >= 0 && value <= 5 ? null : 'ระบุได้เฉพาะเลข 0 ถึง 5'),
      f: (value) => ((value) >= 0 && value <= 5 ? null : 'ระบุได้เฉพาะเลข 0 ถึง 5'),
      g: (value) => ((value) >= 0 && value <= 5 ? null : 'ระบุได้เฉพาะเลข 0 ถึง 5'),
      h: (value) => ((value) >= 0 && value <= 5 ? null : 'ระบุได้เฉพาะเลข 0 ถึง 5'),
    }
  });

  return (
    <form onSubmit={form.onSubmit(handleFormSubmit)}>
      <TextInput
        required
        label='1 โครงการที่ส่งผลต่อปัจจัยหลักภายใต้ห่วงโซ่คุณค่าของเป้าหมายแผนแม่บทย่อยที่เลือกมา(ตามข้อเท็จจริง) และสามารถส่งผลต่อการบรรลุเป้าหมายแผนแม่บทและยุทธศาสตร์ชาติ(XYZ) (ระบุได้เฉพาะเลข 1 หรือ 0)'
        placeholder='0'
        {...form.getInputProps("a")}
      />
      <TextInput
        required
        label='2 โครงการเป็นการจัดตั้งกองทุนฯ/หน่วยงาน/คณะกรรมการต่างๆ'
        placeholder='0'
        {...form.getInputProps("b")}
      />
      <TextInput
        required
        label='3 ความจำเป็นต้องมีหรือไม่มีโครงการนี้'
        placeholder='0'
        {...form.getInputProps("c")}
      />
      <TextInput
        required
        label='4 โครงการเป็นการจัดทำจากข้อมูลเชิงประจักษ์ เช่น มีข้อมูลสถิติ/ข้อเท็จจริงรองรับ'
        placeholder='0'
        {...form.getInputProps("d")}
      />
      <TextInput
        required
        label='5 โครงการมีวัตถุประสงค์ ผลผลิต ผลลัพธ์ และกลุ่มเป้าหมายผู้รับประโยชน์ชัดเจน สามารถส่งผลต่อการบรรลุเป้าหมายอย่างเป็นรูปธรรม'
        placeholder='0'
        {...form.getInputProps("e")}
      />
      <TextInput
        required
        label='6 โครงการมีแผนการดำเนินงานและกิจกรรมที่ชัดเจน เป็นไปได้จริง และส่งผลโดยตรงต่อการบรรลุเป้าหมายและวัตถุประสงค์ของโครงการอย่างแท้จริง'
        placeholder='0'
        {...form.getInputProps("f")}
      />
      <TextInput
        required
        label='7 โครงการมีตัวชี้วัดที่สามารถสะท้อนการบรรลุผลสัมฤทธิ์ตามเป้าหมายได้อย่างเป็นรูปธรรม'
        placeholder='0'
        {...form.getInputProps("g")}
      />
      <TextInput
        required
        label='8 ในกรณีที่เป็นโครงการจัดซื้อครุภัณฑ์/ปรับปรุง/ซ่อมแซม/ก่อนสร้างอาคารสถานที่ของส่วนราชการต้องส่งผลต่อการบรรลุเป้าหมายแผนแม่บทย่อยที่เกี่ยวข้องอย่างชัดเจน'
        placeholder='0'
        {...form.getInputProps("h")}
      />
      <Group position='center' mt='md'>
        <Button type='submit'>แสดงผลคะแนน</Button>
      </Group>
    </form>
  );
};

export default DataPointForm;
