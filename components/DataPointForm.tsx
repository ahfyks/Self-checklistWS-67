import { Box, TextInput, Group, Button, Select } from "@mantine/core";
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
    },
    validate: {
      a: (value) => ((value) == 1 || (value) == 0 ? null : 'ระบุได้เฉพาะเลข 1 หรือ 0'),
      b: (value) => ((value) >= 0 && value <= 5 ? null : 'ระบุได้เฉพาะเลข 0 ถึง 5'),
      c: (value) => ((value) >= 0 && value <= 5 ? null : 'ระบุได้เฉพาะเลข 0 ถึง 5'),
      d: (value) => ((value) >= 0 && value <= 5 ? null : 'ระบุได้เฉพาะเลข 0 ถึง 5'),
      e: (value) => ((value) >= 0 && value <= 5 ? null : 'ระบุได้เฉพาะเลข 0 ถึง 5'),
      f: (value) => ((value) >= 0 && value <= 5 ? null : 'ระบุได้เฉพาะเลข 0 ถึง 5'),
      g: (value) => ((value) >= 0 && value <= 5 ? null : 'ระบุได้เฉพาะเลข 0 ถึง 5'),
    }
  });

  return (
    <form onSubmit={form.onSubmit(handleFormSubmit)}>
      <Select
        required
        label='1. โครงการส่งผลต่อปัจจัยหลักภายใต้ห่วงโซ่คุณค่า ของเป้าหมายแผนแม่บทย่อย (Y1) ที่เลือกมา (ตามข้อเท็จจริง) และสามารถส่งผลต่อการบรรลุเป้าหมายแผนแม่บทและยุทธศาสตร์ชาติ ตามหลักการ XYZ (ระบุได้เฉพาะเลข 1 หรือ 0)'
        placeholder='โปรดเลือกคะแนน'
        searchable
        nothingFound = 'โปรดระบุคะแนน 0-1'
        data = {[
          '0',
          '1',
        ]}
        {...form.getInputProps("a")}
      />
      <Select
        required
        label='2.ความจำเป็นต้องมีหรือไม่มีโครงการนี้'
        placeholder='โปรดเลือกคะแนน'
        searchable
        nothingFound = 'โปรดระบุคะแนน 0-5'
        data = {[
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
        ]}
        {...form.getInputProps("b")}
      />
      <Select
        required
        label='3. โครงการเป็นการจัดทำจากข้อมูล เชิงประจักษ์ เช่น มีข้อมูลสถิติ/งานวิจัยรองรับ (ไม่ใช่การกล่าวอ้าง)'
        placeholder='โปรดเลือกคะแนน'
        searchable
        nothingFound = 'โปรดระบุคะแนน 0-5'
        data = {[
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
        ]}
        {...form.getInputProps("c")}
      />
      <Select
        required
        label='4. โครงการมีวัตถุประสงค์ ผลผลิต ผลลัพธ์ และกลุ่มเป้าหมายผู้รับประโยชน์ที่ชัดเจน สามารถส่งผลต่อการบรรลุเป้าหมายของโครงการอย่างเป็นรูปธรรม'
        placeholder='โปรดเลือกคะแนน'
        searchable
        nothingFound = 'โปรดระบุคะแนน 0-5'
        data = {[
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
        ]}
        {...form.getInputProps("d")}
      />
      <Select
        required
        label='5. โครงการมีแผนการดำเนินงานและกิจกรรม ที่ชัดเจน เป็นไปได้จริง และส่งผลโดยตรงต่อการบรรลุเป้าหมาย และวัตถุประสงค์ของโครงการอย่างแท้จริง'
        placeholder='โปรดเลือกคะแนน'
        searchable
        nothingFound = 'โปรดระบุคะแนน 0-5'
        data = {[
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
        ]}
        {...form.getInputProps("e")}
      />
      <Select
        required
        label='6. โครงการมีตัวชี้วัดที่สามารถสะท้อนการบรรลุผลสัมฤทธิ์ตามเป้าหมายของโครงการ ได้อย่างเป็นรูปธรรม'
        placeholder='โปรดเลือกคะแนน'
        searchable
        nothingFound = 'โปรดระบุคะแนน 0-5'
        data = {[
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
        ]}
        {...form.getInputProps("f")}
      />
      <Select
        required
        label='7. โครงการเป็นการปรับปรุงซ่อมแซม/ก่อสร้างอาคาร/จัดตั้งกองทุน/หน่วยงาน/คณะกรรมการต่าง ๆ หรือไม่ หากเป็นต้องส่งผลต่อการบรรลุเป้าหมายแผนแม่บทย่อย (Y1) ที่เกี่ยวข้องอย่างชัดเจน'
        placeholder='โปรดเลือกคะแนน'
        searchable
        nothingFound = 'โปรดระบุคะแนน 0-5'
        data = {[
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
        ]}
        {...form.getInputProps("g")}
      />
      <Group position='center' mt='md'>
        <Button type='submit'>แสดงผลคะแนน</Button>
      </Group>
    </form>
  );
};

export default DataPointForm;
