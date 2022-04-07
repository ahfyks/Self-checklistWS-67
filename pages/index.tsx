import { useState } from "react";
import type { NextPage } from "next";
import {
  AppShell,
  Box,
  Burger,
  Button,
  Group,
  Header,
  Image,
  MediaQuery,
  TextInput,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const setChartData = (data: number[]) => ({
  labels: ["A", "B", "C", "D", "E", "F"],
  datasets: [
    {
      label: "My Values",
      data: data,
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Demo Values",
      data: [28, 48, 40, 19, 96, 27],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
});
const options = {
  elements: {
    line: {
      borderWidth: 3,
    },
  },
  scales: {
    r: {
      suggestedMin: 0,
      suggestedMax: 100,
    },
  },
};

const Home: NextPage = () => {
  const theme = useMantineTheme();
  const [formValues, setFormValues] = useState<number[]>([]);
  const [opened, setOpened] = useState(false);
  const form = useForm({
    initialValues: {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
    },
  });

  return (
    <AppShell
      padding='md'
      header={
        <Header height={80} p='md'>
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}>
            <Image width={80} height={80} src='nesdc-logo.png' />
            <Text weight={700}>
              Office of the National Economic and Social Development Council
            </Text>
            <MediaQuery largerThan='sm' styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size='sm'
                color={theme.colors.gray[6]}
                mr='xl'
              />
            </MediaQuery>
          </div>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}>
      <Group grow>
        <Group grow position='center' my='100px'>
          <Box sx={{ maxWidth: 360 }} mx='auto'>
            <form
              onSubmit={form.onSubmit((values) => {
                setFormValues(Object.values(values));
              })}>
              <TextInput
                required
                label='A'
                placeholder='0'
                {...form.getInputProps("a")}
              />
              <TextInput
                required
                label='B'
                placeholder='0'
                {...form.getInputProps("b")}
              />
              <TextInput
                required
                label='C'
                placeholder='0'
                {...form.getInputProps("c")}
              />
              <TextInput
                required
                label='D'
                placeholder='0'
                {...form.getInputProps("d")}
              />
              <TextInput
                required
                label='E'
                placeholder='0'
                {...form.getInputProps("e")}
              />
              <TextInput
                required
                label='F'
                placeholder='0'
                {...form.getInputProps("f")}
              />
              <Group position='center' mt='md'>
                <Button type='submit'>Submit</Button>
              </Group>
            </form>
          </Box>
        </Group>
        <Group grow position='center' my='100px'>
          <Box sx={{ maxWidth: 640 }} mx='auto'>
            <Radar data={setChartData(formValues)} options={options} />
          </Box>
        </Group>
      </Group>
    </AppShell>
  );
};

export default Home;
