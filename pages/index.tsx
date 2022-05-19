import { useState } from "react";
import type { NextPage } from "next";
import { Box, Divider, Group, Text, useMantineTheme } from "@mantine/core";

import CustomAppShell from "../components/Layout";
import CustomRadarChart from "../components/CustomRadarChart";
import DataPointForm from "../components/DataPointForm";
import DataPointFormValues from "../types/DataPointFormValues";
import { ResponsiveFlexWrapper } from "../components/ResponsiveFlexWrapper";

const Home: NextPage = () => {
  const [formValues, setFormValues] = useState<number[]>([]);
  const handleFormSubmit = (values: DataPointFormValues) => {
    setFormValues(Object.values(values));
  };
  const theme = useMantineTheme()



  return (
    <CustomAppShell>
            <Text size="sm" weight={5}>
              รายละเอียดเกี่ยวกับการจัดทำโครงการเพื่อขับเคลื่อนการบรรลุเป้าหมายตามยุทธศาสตร์ชาติ ประจำปี 2567 สามารถดูได้ที่ 
              <Text variant="link" component="a" href="http://nscr.nesdc.go.th/project2567/"> http://nscr.nesdc.go.th/project2567/</Text>
            </Text>
            {/* <Divider color={'dark'} size="md"  /> */}
            <div style={{width: '100%', height: '2px', backgroundColor: theme.colors.gray[8], marginTop:'10px',marginBottom:'10px' }}></div>
      <ResponsiveFlexWrapper>
        <Group grow position='center'>
          <Box sx={{ maxWidth: 'auto' }} mx='auto'>
            <DataPointForm handleFormSubmit={handleFormSubmit} />
          </Box>
        </Group>

        <Group grow position='center'>
          <Box sx={{ maxWidth: 640 }} mx='auto'>
            <CustomRadarChart data={formValues} />
          </Box>
        </Group>
      </ResponsiveFlexWrapper>
    </CustomAppShell>
  );
};

export default Home;
