import {
  AppShell,
  Burger,
  Footer,
  Header,
  Image,
  MediaQuery,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { ReactNode, useState } from "react";

type Props = {
  children?: ReactNode;
};

const CustomAppShell = ({ children }: Props) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      padding='md'
      header={
        <Header height={70} p='xs'>
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}>
            <Image width={80} height={80} src='nesdc-logo.png' />
            <Text weight={700}>
              Self-Checklist หลักเกณฑ์การประเมินข้อเสนอโครงการสำคัญ
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
      footer={
        <Footer height={40} p="xs">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}>
            <Image width={20} height={20} src='nesdc-logo.png' />
            <Text size="xs" weight={5}>
              สำนักงานสภาพัฒนาการเศรษฐกิจและสังคมแห่งชาติ
              <Text size="xs" weight={5}>
                Office of the National Economic and Social Development Council
              </Text>
            </Text>
          </div>
        </Footer>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}>
      {children}
    </AppShell>
  );
};

export default CustomAppShell;
